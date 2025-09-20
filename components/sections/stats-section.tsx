import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    description: "Successful websites delivered",
  },
  {
    number: "25+",
    label: "Happy Clients",
    description: "Satisfied business owners",
  },
  {
    number: "100%",
    label: "Success Rate",
    description: "Projects delivered on time",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Always here to help",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Leading <span className="gradient-text">Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">Our track record speaks for itself</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg card-hover">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
