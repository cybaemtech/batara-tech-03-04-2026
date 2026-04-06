import { useState } from "react";
import {
  Menu, X, ChevronDown, Shield,
  Plane, Car, Cog, Cpu, Zap, Truck,
  Layers, Compass, Factory, GitBranch, Film, CircuitBoard, FolderOpen, Image,
  ArrowRight,
} from "lucide-react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const WA_LINK = "https://wa.me/918105111599";

const industriesItems = [
  { label: "Aerospace",             icon: Plane },
  { label: "Automotive",            icon: Car },
  { label: "Industrial Machinery",  icon: Cog },
  { label: "Industrial Automation", icon: Cpu },
  { label: "Electro Mechanical",    icon: Zap },
  { label: "Heavy Machinery",       icon: Truck },
];

const servicesItems = [
  { label: "Solutions",                                                              href: "/services",          icon: Layers },
  { label: "Engineering Design & Analysis",                                          href: "/services",          icon: Compass },
  { label: "Manufacturing Engineering – BIW, Mould & Sheet Metal",                  href: "/mould-design",      icon: Factory },
  { label: "Integrated Project Delivery",                                            href: "/services",          icon: GitBranch },
  { label: "Technical Animation & Publication",                                      href: "/services",          icon: Film },
  { label: "Electronics Manufacturing (PCB & Electromechanical)",                   href: "/services",          icon: CircuitBoard },
  { label: "Project Portfolio",                                                      href: "/mould-design",      icon: FolderOpen },
  { label: "Technical Gallery",                                                      href: "/technical-gallery", icon: Image },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRequestPrototype = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-10 h-[76px] bg-card/95 backdrop-blur-xl border-b border-border">
      <Link to="/" className="flex items-center shrink-0">
        <img src="/btlogonew.png" alt="Batara Techno Solutions" className="h-[62px] w-auto" />
      </Link>

      <ul className="hidden lg:flex items-center gap-7 list-none">

        {/* Industries dropdown */}
        <li className="relative group">
          <button className="flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase text-silver hover:text-foreground transition-colors py-2">
            Industries
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 mt-1 w-[420px] bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[200] p-2 grid grid-cols-2 gap-0.5">
            {industriesItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-secondary"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center group-hover/item:bg-primary/15 transition-colors">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="flex-1 text-[13px] text-silver group-hover/item:text-foreground transition-colors leading-tight">
                  {item.label}
                </span>
                <ArrowRight className="w-3 h-3 text-silver/40 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all duration-150 opacity-0 group-hover/item:opacity-100" />
              </a>
            ))}
          </div>
        </li>

        {/* Services dropdown */}
        <li className="relative group">
          {(() => {
            const servicesPaths = ["/services", "/mould-design", "/technical-gallery"];
            const isServicesActive = servicesPaths.includes(location.pathname);
            return (
              <button className={`flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase transition-colors py-2 ${isServicesActive ? "text-primary" : "text-silver hover:text-foreground"}`}>
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            );
          })()}
          <div className="absolute top-full left-0 mt-1 w-[540px] bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[200] p-2 grid grid-cols-2 gap-0.5">
            {servicesItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group/item flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-secondary"
              >
                <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center group-hover/item:bg-primary/15 transition-colors">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="flex-1 text-[13px] text-silver group-hover/item:text-foreground transition-colors leading-snug">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </li>

        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            Careers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded bg-primary/5 text-primary text-[13px] font-medium tracking-wide hover:bg-primary/10 hover:border-primary transition-all"
        >
          <WhatsAppIcon />
          WhatsApp Us
        </a>
        <button
          onClick={handleRequestPrototype}
          className="flex items-center gap-2 px-5 py-2 bg-primary rounded text-primary-foreground text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(214_72%_37%/0.35)] transition-all"
        >
          <Shield className="w-3.5 h-3.5" />
          Request Prototype
        </button>
      </div>

      <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileOpen && (
        <div className="absolute top-[76px] left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-1 lg:hidden max-h-[80vh] overflow-y-auto">

          {/* Mobile — Industries */}
          <button
            className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-silver hover:text-foreground transition-colors py-2.5"
            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
          >
            Industries
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileIndustriesOpen && (
            <div className="ml-2 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3 mb-2">
              {industriesItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 py-2 px-2 rounded-lg text-sm text-silver hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-primary/8 flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Mobile — Services */}
          <button
            className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-silver hover:text-foreground transition-colors py-2.5"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="ml-2 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3 mb-2">
              {servicesItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-3 py-2 px-2 rounded-lg text-sm text-silver hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-primary/8 flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </Link>
              ))}
            </div>
          )}

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-sm font-medium uppercase tracking-wider transition-colors py-2.5 ${isActive ? "text-primary font-semibold" : "text-silver hover:text-foreground"}`
            }
            onClick={() => setMobileOpen(false)}
          >
            Careers
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium uppercase tracking-wider transition-colors py-2.5 ${isActive ? "text-primary font-semibold" : "text-silver hover:text-foreground"}`
            }
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </NavLink>

          <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-border">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-primary/30 rounded text-primary text-sm font-medium"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <button
              onClick={handleRequestPrototype}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded text-primary-foreground text-sm font-semibold"
            >
              <Shield className="w-4 h-4" />
              Request Prototype
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
