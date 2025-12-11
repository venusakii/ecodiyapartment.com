import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Lightbulb, Recycle, Droplet, Zap, TreePine } from "lucide-react"

export default function HomePage() {
  const projects = [
    { title: "Vertical Garden Rack", category: "Plants", difficulty: "Easy", image: "/vertical-garden-apartment.jpg" },
    {
      title: "Upcycled Pallet Coffee Table",
      category: "Furniture",
      difficulty: "Medium",
      image: "/wood-pallet-coffee-table.jpg",
    },
    {
      title: "Mason Jar Pendant Lights",
      category: "Lighting",
      difficulty: "Easy",
      image: "/mason-jar-pendant-light.jpg",
    },
    { title: "Rope Storage Baskets", category: "Storage", difficulty: "Easy", image: "/rope-basket-natural.jpg" },
    { title: "Cork Board Wall Organizer", category: "Decor", difficulty: "Easy", image: "/cork-board-wall.jpg" },
    { title: "Bamboo Shelf System", category: "Storage", difficulty: "Medium", image: "/bamboo-shelves-minimalist.jpg" },
  ]

  const tutorials = [
    { title: "Make Your Own Vertical Garden Rack", duration: "2 hours", icon: TreePine },
    { title: "Natural Paints for Small Walls", duration: "1 hour", icon: Leaf },
    { title: "Compact Compost Setup for Apartments", duration: "30 min", icon: Recycle },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-primary/20">
          <img src="/sunlit-apartment-plants-wood-cozy-minimal.jpg" alt="Eco apartment" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center gap-3">
            <span className="text-5xl animate-sway inline-block">🪴</span>
            <span className="text-5xl animate-float inline-block">🌿</span>
            <span className="text-5xl animate-sway inline-block" style={{ animationDelay: "0.5s" }}>
              🌱
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Sustainability Starts Where You Live
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Creative, low-waste DIY for compact city homes.
            <br />
            Design smarter. Live greener.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
              Explore Projects →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Start Your First Eco DIY 🪴
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 text-balance">
            Tiny Projects, Big Change.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">♻️ Upcycled Decor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform waste into beautiful, functional pieces for your home
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">💡 Energy-Smart Hacks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simple solutions to reduce energy and save on utility bills
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">🌱 Indoor Green Builds</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bring nature indoors with creative plant displays and gardens
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-lg text-muted-foreground mt-12 text-balance">
            Our mission: make sustainability feel achievable in every 400-square-foot home.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-foreground">Featured Eco DIY Projects</h2>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {project.difficulty}
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-primary mb-1">{project.category}</p>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Button variant="outline" className="border-primary/30 bg-transparent">
              🪴 Plant & Green Projects
            </Button>
            <Button variant="outline" className="border-primary/30 bg-transparent">
              🪚 Furniture & Storage
            </Button>
            <Button variant="outline" className="border-primary/30 bg-transparent">
              🕯️ Lighting & Decor
            </Button>
            <Button variant="outline" className="border-primary/30 bg-transparent">
              🧺 Waste Reduction
            </Button>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 text-balance">Learn DIY, Sustainably</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tutorial.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{tutorial.title}</h3>
                      <p className="text-sm text-muted-foreground">{tutorial.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Browse All Tutorials →</Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 text-balance">Energy & Water Savings</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">12,400 L</div>
              <p className="text-muted-foreground">💧 Water Saved</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">2,800 kWh</div>
              <p className="text-muted-foreground">⚡ Energy Reduced</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">800 kg</div>
              <p className="text-muted-foreground">🪵 Materials Reused</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <span className="text-6xl">🏡</span>
          </div>

          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">About EcoDIYApartment</h2>

          <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-8">
            Born from small-space living and big dreams for a greener future. We believe that sustainability isn't about
            having more space—it's about making smarter choices with the space you have.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Read Our Story →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
