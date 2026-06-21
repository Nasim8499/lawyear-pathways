import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, CalendarCheck, Download, Home, Plus, RefreshCcw, Save, Search, Trash2, Users } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";
import { DEFAULT_LAWYERS, Lawyer, getStoredLawyers, resetStoredLawyers, saveStoredLawyers, slugifyLawyerId } from "@/data/lawyers";
import { BookingRecord, LeadRecord, SiteContent, exportAdminSnapshot, getBookings, getLeads, getSiteContent, saveBookings, saveLeads, saveSiteContent } from "@/data/admin";

type Tab = "overview" | "lawyers" | "bookings" | "leads" | "content";

const blankLawyer: Lawyer = { id: "", name: "", country: "Australia", spec: "", rating: 4.8, years: 5, bio: "", services: [], coverage: [], languages: ["English"], fee: "AUD 200 / 45 min", location: "", status: "Active" };
const inputClass = "w-full rounded-2xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20";
const listIn = (value: string) => value.split(",").map((item) => item.trim()).filter(Boolean);
const listOut = (value: string[]) => value.join(", ");
const Field = ({ label, children }: { label: string; children: React.ReactNode }) => <label className="space-y-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"><span>{label}</span>{children}</label>;

const MockupPreview = () => {
  const [tab, setTab] = useState<Tab>("overview");
  const [query, setQuery] = useState("");
  const [lawyers, setLawyers] = useState<Lawyer[]>(() => getStoredLawyers());
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer>(lawyers[0] ?? blankLawyer);
  const [bookings, setBookings] = useState<BookingRecord[]>(() => getBookings());
  const [leads, setLeads] = useState<LeadRecord[]>(() => getLeads());
  const [content, setContent] = useState<SiteContent>(() => getSiteContent());

  const filteredLawyers = useMemo(() => lawyers.filter((lawyer) => `${lawyer.name} ${lawyer.country} ${lawyer.spec}`.toLowerCase().includes(query.toLowerCase())), [lawyers, query]);
  const activeLawyers = lawyers.filter((lawyer) => lawyer.status !== "Paused").length;
  const openBookings = bookings.filter((booking) => booking.status === "New" || booking.status === "Confirmed").length;
  const hotLeads = leads.filter((lead) => lead.priority === "High").length;

  const saveLawyer = () => {
    const record = { ...selectedLawyer, id: selectedLawyer.id || slugifyLawyerId(selectedLawyer.name), rating: Number(selectedLawyer.rating), years: Number(selectedLawyer.years) };
    const next = lawyers.some((lawyer) => lawyer.id === record.id) ? lawyers.map((lawyer) => lawyer.id === record.id ? record : lawyer) : [record, ...lawyers];
    setLawyers(next); setSelectedLawyer(record); saveStoredLawyers(next);
  };

  const removeLawyer = (id: string) => {
    const next = lawyers.filter((lawyer) => lawyer.id !== id);
    setLawyers(next); setSelectedLawyer(next[0] ?? blankLawyer); saveStoredLawyers(next);
  };

  const restoreLawyers = () => {
    resetStoredLawyers(); setLawyers(DEFAULT_LAWYERS); setSelectedLawyer(DEFAULT_LAWYERS[0]);
  };

  const updateBooking = (id: string, status: BookingRecord["status"]) => {
    const next = bookings.map((booking) => booking.id === id ? { ...booking, status } : booking);
    setBookings(next); saveBookings(next);
  };

  const updateLead = (id: string, stage: LeadRecord["stage"]) => {
    const next = leads.map((lead) => lead.id === id ? { ...lead, stage } : lead);
    setLeads(next); saveLeads(next);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(exportAdminSnapshot(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = `lawyear-export-${Date.now()}.json`; anchor.click(); URL.revokeObjectURL(url);
  };

  return (
    <MobileLayout hideBottomNav title="Operations Panel">
      <div className="px-4 py-4 space-y-4 pb-10">
        <div className="bg-gradient-deep text-primary-foreground rounded-[28px] p-5 shadow-deep relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-gold opacity-20 blur-3xl"/>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">Control room</p>
          <h1 className="font-display text-3xl leading-tight mt-1">LawYear operations</h1>
          <p className="text-xs opacity-75 mt-1">Manage counsel, bookings, leads and website text.</p>
          <div className="grid grid-cols-3 gap-2 mt-5 relative">
            <div className="rounded-2xl bg-primary-foreground/10 p-3"><p className="font-display text-2xl">{activeLawyers}</p><p className="text-[10px] opacity-70">counsel</p></div>
            <div className="rounded-2xl bg-primary-foreground/10 p-3"><p className="font-display text-2xl text-gold">{openBookings}</p><p className="text-[10px] opacity-70">bookings</p></div>
            <div className="rounded-2xl bg-primary-foreground/10 p-3"><p className="font-display text-2xl">{hotLeads}</p><p className="text-[10px] opacity-70">hot leads</p></div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {[["overview", BarChart3, "Overview"], ["lawyers", Users, "Lawyers"], ["bookings", CalendarCheck, "Bookings"], ["leads", Users, "Leads"], ["content", Home, "Content"]].map(([key, Icon, label]) => {
            const I = Icon as typeof BarChart3;
            return <button key={key as string} onClick={() => setTab(key as Tab)} className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold ${tab === key ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-card border border-border text-muted-foreground"}`}><I size={13}/>{label as string}</button>;
          })}
        </div>

        {tab === "overview" && <div className="grid grid-cols-2 gap-3"><Link to="/" className="col-span-2 rounded-3xl bg-card border border-border p-4 shadow-card flex items-center justify-between"><span><p className="font-display text-xl">Open website</p><p className="text-xs text-muted-foreground">Preview public app</p></span><Home size={20} className="text-gold"/></Link><button onClick={exportData} className="rounded-3xl bg-card border border-border p-4 shadow-card text-left"><Download size={18}/><p className="font-display text-xl mt-3">Export</p><p className="text-xs text-muted-foreground">Download JSON</p></button><button onClick={restoreLawyers} className="rounded-3xl bg-card border border-border p-4 shadow-card text-left"><RefreshCcw size={18}/><p className="font-display text-xl mt-3">Reset</p><p className="text-xs text-muted-foreground">Default counsel</p></button></div>}

        {tab === "lawyers" && <div className="space-y-4"><div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search counsel" className={`${inputClass} pl-9`}/></div><div className="grid grid-cols-2 gap-2">{filteredLawyers.map((lawyer) => <button key={lawyer.id} onClick={() => setSelectedLawyer(lawyer)} className={`rounded-2xl border p-3 text-left shadow-card ${selectedLawyer.id === lawyer.id ? "border-gold bg-secondary" : "border-border bg-card"}`}><p className="font-display text-base leading-tight">{lawyer.name}</p><p className="text-[10px] text-muted-foreground truncate">{lawyer.country} · {lawyer.spec}</p><p className="text-[9px] mt-2 text-gold font-semibold">{lawyer.status ?? "Active"}</p></button>)}</div><div className="bg-card border border-border rounded-[28px] p-4 shadow-card space-y-3"><div className="flex items-center justify-between"><p className="font-display text-2xl">Counsel editor</p><button onClick={() => setSelectedLawyer({ ...blankLawyer })} className="rounded-xl bg-secondary px-3 py-2 text-xs font-semibold flex items-center gap-1"><Plus size={13}/>New</button></div><Field label="Full name"><input value={selectedLawyer.name} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, name: e.target.value })} className={inputClass}/></Field><div className="grid grid-cols-2 gap-2"><Field label="Country"><input value={selectedLawyer.country} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, country: e.target.value })} className={inputClass}/></Field><Field label="Status"><select value={selectedLawyer.status ?? "Active"} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, status: e.target.value as Lawyer["status"] })} className={inputClass}><option>Active</option><option>Draft</option><option>Paused</option></select></Field></div><Field label="Speciality"><input value={selectedLawyer.spec} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, spec: e.target.value })} className={inputClass}/></Field><div className="grid grid-cols-2 gap-2"><Field label="Rating"><input type="number" step="0.1" value={selectedLawyer.rating} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, rating: Number(e.target.value) })} className={inputClass}/></Field><Field label="Years"><input type="number" value={selectedLawyer.years} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, years: Number(e.target.value) })} className={inputClass}/></Field></div><Field label="Fee"><input value={selectedLawyer.fee} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, fee: e.target.value })} className={inputClass}/></Field><Field label="Location"><input value={selectedLawyer.location} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, location: e.target.value })} className={inputClass}/></Field><Field label="Bio"><textarea value={selectedLawyer.bio} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, bio: e.target.value })} className={`${inputClass} min-h-24`}/></Field><Field label="Services comma separated"><input value={listOut(selectedLawyer.services)} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, services: listIn(e.target.value) })} className={inputClass}/></Field><Field label="Coverage comma separated"><input value={listOut(selectedLawyer.coverage)} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, coverage: listIn(e.target.value) })} className={inputClass}/></Field><Field label="Languages comma separated"><input value={listOut(selectedLawyer.languages)} onChange={(e) => setSelectedLawyer({ ...selectedLawyer, languages: listIn(e.target.value) })} className={inputClass}/></Field><div className="grid grid-cols-2 gap-2"><button onClick={saveLawyer} className="rounded-2xl bg-gradient-primary text-primary-foreground py-3 text-sm font-semibold shadow-glow flex items-center justify-center gap-2"><Save size={15}/>Save</button><button onClick={() => selectedLawyer.id && removeLawyer(selectedLawyer.id)} className="rounded-2xl bg-secondary py-3 text-sm font-semibold flex items-center justify-center gap-2"><Trash2 size={15}/>Delete</button></div></div></div>}

        {tab === "bookings" && <div className="space-y-3">{bookings.map((booking) => <div key={booking.id} className="bg-card border border-border rounded-3xl p-4 shadow-card"><div className="flex justify-between gap-3"><div><p className="font-display text-xl">{booking.client}</p><p className="text-xs text-muted-foreground">{booking.country} · {booking.lawyer}</p><p className="text-[11px] text-gold mt-1">{booking.date} · {booking.channel}</p></div><span className="text-[10px] h-fit rounded-full bg-secondary px-2 py-1 font-semibold">{booking.status}</span></div><select value={booking.status} onChange={(e) => updateBooking(booking.id, e.target.value as BookingRecord["status"])} className={`${inputClass} mt-3`}><option>New</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option></select></div>)}</div>}

        {tab === "leads" && <div className="space-y-3">{leads.map((lead) => <div key={lead.id} className="bg-card border border-border rounded-3xl p-4 shadow-card"><div className="flex justify-between gap-3"><div><p className="font-display text-xl">{lead.name}</p><p className="text-xs text-muted-foreground">{lead.country} · {lead.service}</p><p className="text-[11px] text-gold mt-1">{lead.phone}</p></div><span className="text-[10px] h-fit rounded-full bg-secondary px-2 py-1 font-semibold">{lead.priority}</span></div><select value={lead.stage} onChange={(e) => updateLead(lead.id, e.target.value as LeadRecord["stage"])} className={`${inputClass} mt-3`}><option>New</option><option>Contacted</option><option>Document Review</option><option>Converted</option></select></div>)}</div>}

        {tab === "content" && <div className="bg-card border border-border rounded-[28px] p-4 shadow-card space-y-3"><p className="font-display text-2xl">Website content</p><Field label="Headline"><input value={content.headline} onChange={(e) => setContent({ ...content, headline: e.target.value })} className={inputClass}/></Field><Field label="Subheadline"><textarea value={content.subheadline} onChange={(e) => setContent({ ...content, subheadline: e.target.value })} className={`${inputClass} min-h-20`}/></Field><Field label="Announcement"><input value={content.announcement} onChange={(e) => setContent({ ...content, announcement: e.target.value })} className={inputClass}/></Field><Field label="Support email"><input value={content.supportEmail} onChange={(e) => setContent({ ...content, supportEmail: e.target.value })} className={inputClass}/></Field><Field label="WhatsApp"><input value={content.whatsapp} onChange={(e) => setContent({ ...content, whatsapp: e.target.value })} className={inputClass}/></Field><button onClick={() => saveSiteContent(content)} className="w-full rounded-2xl bg-gradient-primary text-primary-foreground py-3 text-sm font-semibold shadow-glow flex items-center justify-center gap-2"><Save size={15}/>Save content</button></div>}
      </div>
    </MobileLayout>
  );
};

export default MockupPreview;
