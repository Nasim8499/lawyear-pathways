import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import MockupPreview from "./pages/MockupPreview.tsx";
import BookAppointment from "./pages/BookAppointment.tsx";
import Lawyers from "./pages/Lawyers.tsx";
import LawyerProfile from "./pages/LawyerProfile.tsx";
import Countries from "./pages/Countries.tsx";
import Messages from "./pages/Messages.tsx";
import MessageThread from "./pages/MessageThread.tsx";
import Profile from "./pages/Profile.tsx";
import Bookings from "./pages/Bookings.tsx";
import BookingConfirmed from "./pages/BookingConfirmed.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<MockupPreview />} />
          <Route path="/mockup-preview" element={<MockupPreview />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/lawyers/:id" element={<LawyerProfile />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<MessageThread />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/confirmed/:id" element={<BookingConfirmed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
