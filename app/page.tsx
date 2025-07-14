import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Wifi,
  Building2,
  Network,
  Clock,
  Globe,
  Cpu,
  Headphones,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function HomePage() {
  // Common perks for every Special Home Package
  const homeFeatures = [
    "Unlimited Youtube (4K)",
    "Unlimited Facebook (FHD)",
    "Unlimited BDIX & FTP",
    "24/7 Support Team",
  ]
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Click Online Logo" width={50} height={50} className="animate-pulse" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Click Online
                </h1>
                <p className="text-xs text-muted-foreground">Internet Service Provider</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#why-choose" className="text-foreground hover:text-primary transition-colors">
                Why Choose Us?
              </Link>
              <Link href="#packages" className="text-foreground hover:text-primary transition-colors">
                Packages
              </Link>
              <Link href="#coverage" className="text-foreground hover:text-primary transition-colors">
                Coverage
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">+880 1716 222 979</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-orange-500/5"></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-full opacity-30 animate-float animation-delay-500"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-25 animate-float animation-delay-700"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-green-400 to-primary rounded-full opacity-20 animate-float animation-delay-300"></div>

          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-pulse animation-delay-400"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse animation-delay-800"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge with enhanced animation */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 animate-bounce-slow">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Almost Zero Downtime
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-500"></div>
                </div>
              </div>

              {/* Main Heading with Typewriter Effect */}
              <div className="space-y-4 animate-fade-in-up animation-delay-200">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block overflow-hidden">
                    <span className="inline-block bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-slide-in-bottom">
                      Fastest
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-in-bottom animation-delay-300">
                      Speed
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block text-foreground animate-slide-in-bottom animation-delay-600">
                      with Reliable Prices
                    </span>
                  </span>
                </h1>
              </div>

              {/* Description with staggered animation */}
              <div className="animate-fade-in-up animation-delay-800">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Leading Internet Service Provider in{" "}
                  <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Dhaka, Bangladesh
                  </span>
                  . Covering Hatirjheel, Ramna, and Khilgaon areas with lightning-fast connectivity.
                </p>
              </div>

              {/* CTA Buttons with enhanced animations */}
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-900">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  asChild
                >
                  <Link href="#packages">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      <span>View Packages</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10 bg-transparent"
                  asChild
                >
                  <Link href="tel:+8801716222979">
                    <div className="relative flex items-center space-x-2">
                      <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Call Now</span>
                    </div>
                  </Link>
                </Button>
              </div>

              {/* Stats with counter animation */}
              <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up animation-delay-1000">
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      99.9
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">% Uptime</div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-ping animation-delay-300"></div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Support</div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      3X
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-ping animation-delay-600"></div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Faster Speed</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Redesigned with more animations */}
            <div className="relative animate-fade-in-left animation-delay-400 flex items-center justify-center h-[600px] lg:h-[700px]">
              {/* Central Glowing Orb */}
              <div className="absolute w-64 h-64 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-full flex items-center justify-center animate-glow">
                <Wifi className="w-24 h-24 text-white opacity-80 animate-pulse" />
              </div>

              {/* Floating Elements Around Central Orb */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-4 -right-12 w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center animate-float animation-delay-300 shadow-lg">
                <Cpu className="w-10 h-10 text-10 text-white" />
              </div>
              <div className="absolute -bottom-8 -left-12 w-18 h-18 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center animate-float animation-delay-600 shadow-lg">
                <Network className="w-9 h-9 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-gradient-to-r from-green-400 to-primary rounded-2xl flex items-center justify-center animate-float animation-delay-900 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>

              {/* New simple animation: subtle moving lines/particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
                  style={{ animationDelay: "1000ms", animationDuration: "4s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary rounded-full animate-float"
                  style={{ animationDelay: "1200ms", animationDuration: "5s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent rounded-full animate-float"
                  style={{ animationDelay: "1400ms", animationDuration: "4.5s" }}
                ></div>
                <div
                  className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-float"
                  style={{ animationDelay: "1600ms", animationDuration: "3.8s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float"
                  style={{ animationDelay: "1800ms", animationDuration: "4.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">About Us</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Leading Internet Service Provider in Bangladesh
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Click Online is a leading Internet Service Provider in Dhaka, Bangladesh. With coverage of Hatirjheel,
                Ramna, Khilgaon area Click Online is providing the fastest speed in a reliable price. Click Online
                always aware and dedicated to clients satisfaction. We are always ready to provide proper IT related
                solution based on our clients demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Comprehensive Internet Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `0ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Home Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Click Online provides super fast Home Internet connectivity with a reliable package pricing. Depending
                  on client demands, Click provide 3X Faster speed at off-peak hours.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `200ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Corporate Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  We provide dedicated Corporate Internet with high quality dedicated devices. We believe dedicate is
                  actually dedicated. We provide Network solutions for Corporates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `400ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Network Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  With our Office Network Solutions/Services we can help you design, build and maintain your office
                  network architecture depending on clients requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Why Choose Us?</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: `0ms` }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Uptime & Reliability</h3>
              <p className="text-muted-foreground">
                We have proactive monitoring systems in place to ensure the uptime & stability
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: `150ms` }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Multiple Upstream</h3>
              <p className="text-muted-foreground">
                We maintain multiple upstream and redundant solutions for providing best up-time
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: `300ms` }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Latest Technology</h3>
              <p className="text-muted-foreground">
                We have developed our servers for the best performance by equipping latest device
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: `450ms` }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Customer Support</h3>
              <p className="text-muted-foreground">
                We employ a staff of fully trained, friendly and professional agents that are available 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Our Packages</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Choose Your Perfect Plan</h2>
          </div>

          {/* BTRC Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">BTRC Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "BTRC PACKAGE - 1",
                  speed: "5 Mbps",
                  ratio: "1:8",
                  min: "625 Kbps",
                  price: "500",
                  features: ["YouTube (HD)", "Facebook (HD)", "BDIX & FTP", "24/7 Support Team"],
                },
                {
                  name: "BTRC PACKAGE - 2",
                  speed: "10 Mbps",
                  ratio: "1:8",
                  min: "1.25 Mbps",
                  price: "800",
                  features: ["YouTube (FHD)", "Facebook (FHD)", "BDIX & FTP", "24/7 Support Team"],
                },
                {
                  name: "BTRC PACKAGE - 3",
                  speed: "20 Mbps",
                  ratio: "1:8",
                  min: "2.5 Mbps",
                  price: "1200",
                  features: ["YouTube (4K)", "Facebook (4K)", "BDIX & FTP", "24/7 Support Team"],
                },
              ].map((pkg, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg font-semibold text-foreground">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      ৳{pkg.price}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-xl font-semibold text-foreground">{pkg.speed}</div>
                      <div className="text-sm text-muted-foreground">Shared Ratio {pkg.ratio}</div>
                      <div className="text-sm text-muted-foreground">Min: {pkg.min}</div>
                    </div>
                    <div className="space-y-2">
                      {pkg.features?.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0">
                      Call for Get
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Home Packages */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Special Home Packages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  speed: "15",
                  daySpeed: "15Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "5Mbps (6:00PM – 2:00AM)",
                  price: "500",
                },
                {
                  speed: "20",
                  daySpeed: "20Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "8Mbps (6:00PM – 2:00AM)",
                  price: "700",
                },
                {
                  speed: "25",
                  daySpeed: "25Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "10Mbps (6:00PM – 2:00AM)",
                  price: "800",
                },
                {
                  speed: "30",
                  daySpeed: "30Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "12Mbps (6:00PM – 2:00AM)",
                  price: "1000",
                },
                {
                  speed: "40",
                  daySpeed: "40Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "15Mbps (6:00PM – 2:00AM)",
                  price: "1200",
                },
                {
                  speed: "50",
                  daySpeed: "50Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "20Mbps (6:00PM – 2:00AM)",
                  price: "1500",
                },
                {
                  speed: "60",
                  daySpeed: "60Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "25Mbps (6:00PM – 2:00AM)",
                  price: "2000",
                },
                {
                  speed: "80",
                  daySpeed: "80Mbps (2:00AM – 6:00PM)",
                  nightSpeed: "30Mbps (6:00PM – 2:00AM)",
                  price: "2500",
                  featured: true,
                },
              ].map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate hover-lift ${pkg.featured ? "bg-gradient-to-br from-primary/10 to-secondary/10 ring-2 ring-primary" : "bg-card"}`}
                >
                  {pkg.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                        Popular
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="text-2xl font-bold text-primary">{pkg.speed} Mbps</div>
                    <div className="text-3xl font-bold text-foreground">
                      ৳{pkg.price}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-foreground">{pkg.daySpeed}</div>
                      <div className="text-foreground">{pkg.nightSpeed}</div>
                    </div>
                    <div className="space-y-2">
                      {homeFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                      {pkg.speed === "80" && (
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium text-foreground">Public IP Free</span>
                        </div>
                      )}
                    </div>
                    <Button
                      className={`w-full ${pkg.featured ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground" : "bg-foreground hover:bg-foreground/90 text-background"} border-0`}
                    >
                      Call for Get
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Coverage Area</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Areas We Serve</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Hatirjheel", "Ramna", "Khilgaon"].map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Zone */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Entertainment Zone</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Premium Entertainment Services</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "FTP 1", url: "http://circleftp.net/" },
              { name: "FTP 2", url: "http://www.dhakamovie.com/" },
              { name: "TV 1", url: "http://bciptv.net/" },
              { name: "TV 2", url: "http://172.17.50.112/" },
              { name: "TV 3", url: "http://172.21.22.2/" },
              { name: "LIVE TV", url: "http://iptvidn.com/" },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{service.name}</h3>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-primary-foreground border-0 text-xs"
                    asChild
                  >
                    <Link href={service.url} target="_blank" rel="noopener noreferrer">
                      Access Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Contact Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Need Support or Have Any Query?</h2>
            <p className="text-xl text-muted-foreground">Feel free to call us!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Address & Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Click Online - (ISP)</div>
                      <div className="text-muted-foreground">557, Noyatola Road, Maghbazar</div>
                      <div className="text-muted-foreground">Dhaka-1217, Bangladesh</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="space-y-1 text-muted-foreground">
                      <div>+8801716222979, +8801914123652</div>
                      <div>+8801675514867, +8801997455896</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div className="text-muted-foreground">support@clickonlinebd.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Mail</h3>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="border-border bg-muted text-foreground" />
                <Input placeholder="Your Email" type="email" className="border-border bg-muted text-foreground" />
                <Input placeholder="Subject" className="border-border bg-muted text-foreground" />
                <Textarea placeholder="Your Message" rows={5} className="border-border bg-muted text-foreground" />
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Click Online Logo" width={40} height={40} />
                <div>
                  <h3 className="text-lg font-bold">Click Online</h3>
                  <p className="text-sm text-gray-400">Internet Service Provider</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Leading Internet Service Provider in Dhaka, Bangladesh with almost zero downtime and fastest speed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#packages" className="block text-gray-400 hover:text-white transition-colors">
                  Packages
                </Link>
                <Link href="#coverage" className="block text-gray-400 hover:text-white transition-colors">
                  Coverage
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Home Internet</div>
                <div className="text-gray-400">Corporate Internet</div>
                <div className="text-gray-400">Network Solutions</div>
                <div className="text-gray-400">24/7 Support</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>+880 1716 222 979</div>
                <div>support@clickonlinebd.com</div>
                <div>557, Noyatola Road, Maghbazar</div>
                <div>Dhaka-1217, Bangladesh</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Click Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollAnimations />
    </div>
  )
}
