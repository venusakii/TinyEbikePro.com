import { Star, Calendar, ThumbsUp, ShoppingCart, ArrowLeft, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Product data
const products = {
  "blitzu-bike-lights": {
    name: "BLITZU Bike Lights",
    rating: 4.6,
    reviewCount: 20131,
    price: "$22.99",
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/716dr6oRGML._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/BLITZU-Rechargeable-Powerful-Headlight-Flashlight/dp/B014QEWX2I",
    description:
      "Illuminate your ride with the BLITZU Bike Lights set, featuring a super bright USB-C rechargeable LED headlight, taillight, and bell. Designed for ultimate safety, this waterproof set ensures superior visibility for night riding, making it ideal for men, women, and kids on road or mountain bikes.",
    features: [
      "550-lumen LED headlight with 7-hour battery life",
      "Taillight with 10-hour battery life",
      "USB-C rechargeable",
      "Waterproof IPX5 rating",
      "5 lighting modes (High, Medium, Low, Strobe, Flash)",
      "Easy handlebar mount installation",
      "Includes bike bell and reflectors",
      "Lightweight at 3.2 ounces",
    ],
    specs: {
      Weight: "3.2 ounces",
      Dimensions: "4cm x 4cm x 1cm",
      Battery: "Rechargeable Lithium-ion",
      Charging: "USB-C",
      Material: "Aluminum",
      Brightness: "550 lumens",
      Waterproof: "IPX5",
      Warranty: "1 year",
    },
  },
  "vxw-bike-gloves": {
    name: "VXW Bike Gloves for Women Men",
    rating: 4.7,
    reviewCount: 2845,
    price: "$16.99",
    category: "Comfort",
    image: "https://m.media-amazon.com/images/I/61D3huoQEjL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/VXW-Bike-Gloves-Women-Cycling/dp/B0FDQ8VT1J",
    description:
      "Experience superior comfort and control with VXW Bike Gloves. Featuring gel padding for shock absorption and touchscreen-compatible fingertips, these breathable cycling gloves are perfect for road biking, mountain biking, and daily commuting. The ergonomic design reduces hand fatigue on long rides.",
    features: [
      "5mm gel padding for shock absorption",
      "Touchscreen-compatible index finger and thumb",
      "Breathable mesh fabric for ventilation",
      "Anti-slip silicone palm grip",
      "Reflective elements for night visibility",
      "Easy pull-off tabs for quick removal",
      "Hook-and-loop wrist closure for secure fit",
      "Available in multiple sizes (S-XXL)",
    ],
    specs: {
      Weight: "2.4 ounces",
      Material: "Microfiber + Lycra + Gel padding",
      Sizes: "S, M, L, XL, XXL",
      PalmPadding: "5mm gel",
      Closure: "Hook-and-loop",
      Touchscreen: "Yes (index finger & thumb)",
      Colors: "Black, Blue, Red, Green",
      Warranty: "1 year",
    },
  },
  "seatylock-foldylock-compact": {
    name: "Seatylock FoldyLock Compact Folding Bike Lock",
    rating: 4.6,
    reviewCount: 3391,
    price: "$94.98",
    category: "Security",
    image: "https://m.media-amazon.com/images/I/71p7CjjZJdL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/FoldyLock-Compact-Folding-Bike-Lock/dp/B0C7QV339C",
    description:
      "Secure your bike with the award-winning Seatylock FoldyLock Compact. This lightweight, high-security folding lock is bolt cutter, drill, and saw-proof, offering peace of mind for urban and outdoor cycling. Includes keys and a carrying case for easy transport.",
    features: [
      "Hardened steel with anti-tamper rivets",
      "33.5-inch chain link circumference",
      "Sold Secure Silver safety rating",
      "Weatherproof and rust-resistant",
      "Includes 3 master keys",
      "Silent frame mount for rattle-free ride",
      "Folds compactly into carrying case",
      "2020 European Design Award winner",
    ],
    specs: {
      Weight: "1kg",
      Dimensions: "Folds to 18cm x 5cm x 4cm",
      LockLength: "33.5 inches",
      Material: "Hardened steel",
      Mounting: "Frame mount included",
      Warranty: "3 years",
    },
  },
  "lamicall-bike-phone-holder": {
    name: "Lamicall Bike Phone Holder",
    rating: 4.7,
    reviewCount: 1500,
    price: "$19.99",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/61fC18PiL9L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Lamicall-Motorcycle-Phone-Mount-Holder/dp/B0CNT3S8WD/",
    description:
      "Navigate effortlessly with the Lamicall Bike Phone Holder. This handlebar-mounted clamp securely holds phones up to 7 inches, offering a shock-absorbing grip and 360° rotation for perfect viewing angles. Ideal for motorcycles, scooters, and bicycles.",
    features: [
      "Fits phones up to 7 inches",
      "360° rotation for adjustable viewing",
      "Shock-absorbing silicone padding",
      "Universal handlebar fit (15-30mm)",
      "Quick-release mechanism",
      "Anti-slip design",
      "Durable and lightweight",
      "Compatible with iPhone, Samsung, and more",
    ],
    specs: {
      Weight: "150g",
      Dimensions: "15cm x 8cm x 3cm",
      Compatibility: "Phones up to 7 inches",
      Material: "ABS plastic + silicone",
      Fit: "15-30mm handlebars",
      Warranty: "1 year",
    },
  },
  "rockbros-bike-panniers": {
    name: "ROCKBROS Bike Panniers",
    rating: 4.5,
    reviewCount: 1200,
    price: "$49.99",
    category: "Storage",
    image: "https://m.media-amazon.com/images/I/71LMuwVgDBL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ROCKBROS-Panniers-Accessories-Shoulder-Capacity/dp/B07PD2MP59",
    description:
      "Carry your essentials with the ROCKBROS Bike Panniers. Designed for durability and convenience, these large-capacity bags feature a shoulder strap and reflective strips for safety. Perfect for commuting or long-distance cycling.",
    features: [
      "Large storage capacity",
      "Water-resistant ripstop nylon",
      "Reflective strips for visibility",
      "Convertible to shoulder bag",
      "Quick-release mounting system",
      "Reinforced stitching",
      "Side pockets for organization",
      "Fits most rear racks",
    ],
    specs: {
      Weight: "500g",
      Capacity: "20 liters (per bag)",
      Dimensions: "35cm x 15cm x 30cm",
      Material: "Ripstop nylon + PVC coating",
      Waterproof: "Water-resistant",
      Warranty: "1 year",
    },
  },
  "adjustable-handlebar-mirror": {
    name: "Adjustable Handlebar Mirror",
    rating: 4.6,
    reviewCount: 800,
    price: "$14.99",
    category: "Safety",
    image: "https://m.media-amazon.com/images/I/61FuJOOtAcL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Adjustable-Handlebar-Shatterproof-Universal-Compatible/dp/B0DXBPV1HY",
    description:
      "Stay aware of your surroundings with the Adjustable Handlebar Mirror. Its shatterproof convex design provides a wide-angle view, enhancing safety for urban and trail riders. Easy to install and universally compatible with most bikes.",
    features: [
      "Shatterproof convex mirror",
      "Wide-angle visibility",
      "360° adjustable rotation",
      "Fits 22-32mm handlebars",
      "Anti-vibration design",
      "Tool-free installation",
      "Lightweight and durable",
      "Single mirror included",
    ],
    specs: {
      Weight: "100g",
      Mirror: "7cm diameter",
      Material: "ABS plastic + glass",
      Fit: "22-32mm handlebars",
      Warranty: "1 year",
    },
  },
  "rockbros-release-luggage-rack": {
    name: "ROCKBROS Quick Release Luggage Rack",
    rating: 4.7,
    reviewCount: 950,
    price: "$59.99",
    category: "Storage",
    image: "https://m.media-amazon.com/images/I/71fOQPwihXL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ROCKBROS-Release-Luggage-Mountain-Capacity/dp/B08LCQXJXG",
    description:
      "Haul your gear with ease using the ROCKBROS Quick Release Luggage Rack. Built from durable aluminum, this rack supports heavy loads and features a quick-release system for easy installation. Ideal for mountain bikes and commuting.",
    features: [
      "Supports up to 50kg",
      "Aluminum alloy construction",
      "Quick-release mounting system",
      "Adjustable height and width",
      "Pannier bag compatible",
      "Corrosion-resistant coating",
      "Reflector mounting points",
      "Universal bike fit",
    ],
    specs: {
      Weight: "700g",
      Capacity: "50kg",
      Dimensions: "38cm x 14cm x 12cm",
      Material: "Aluminum alloy",
      Fit: "Most bikes with rear mounts",
      Warranty: "2 years",
    },
  },
  "aventon-suspension-seat-post": {
    name: "AVENTON Advanced Suspension Bike Seat Post",
    rating: 4.6,
    reviewCount: 68,
    price: "$84.97",
    category: "Comfort",
    image: "https://m.media-amazon.com/images/I/41gYmv1WXuL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/AVENTON-Advanced-Suspension-seatpost-Mountain/dp/B0D3LKLC6R",
    description:
      "Experience unmatched comfort with the AVENTON Advanced Suspension Bike Seat Post. Its patented parallelogram mechanism offers 50mm of travel to absorb bumps, ideal for road, mountain, and e-bikes. Includes a dust sleeve for low maintenance.",
    features: [
      "50mm suspension travel",
      "Patented parallelogram mechanism",
      "Adjustable preload for rider weight",
      "Fits 27.2mm, 30.4mm, 30.9mm posts",
      "Aluminum alloy construction",
      "Dust sleeve for debris protection",
      "Weight limit: 420 lbs",
      "Compatible with Aventon eBikes",
    ],
    specs: {
      Weight: "1.04kg",
      Diameter: "27.2mm (adapters for 30.4mm, 30.9mm)",
      Length: "365mm",
      MaxExtension: "250mm",
      Material: "Aluminum alloy",
      Warranty: "1 year",
    },
  },
  "wittkop-bike-grips": {
    name: "Wittkop Bike Grips",
    rating: 4.6,
    reviewCount: 956,
    price: "$19.99",
    category: "Comfort",
    image: "https://m.media-amazon.com/images/I/810aDWIek+L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Wittkop-Innovative-Ergonomic-Optimized-Handlebar/dp/B0C7L64VQ4",
    description:
      "Upgrade your ride with Wittkop Bike Grips, featuring an innovative 3-zone ergonomic design made in Germany. These non-slip grips reduce wrist pain and enhance comfort, perfect for long rides on mountain or road bikes.",
    features: [
      "3-zone ergonomic design (non-slip, comfort, EFC)",
      "Reduces wrist pain",
      "UV and weather-resistant rubber",
      "Easy installation with hex key",
      "Fits 22.2mm handlebars",
      "Made in Germany",
      "Lightweight at 240g",
      "Over a century of Wittkop expertise",
    ],
    specs: {
      Weight: "240g",
      Length: "13.1cm",
      Diameter: "22.2mm",
      Material: "Rubber",
      Colors: "Black",
      Warranty: "1 year",
    },
  },
  "hoto-mini-bike-pump": {
    name: "HOTO Mini Bike Tire Pump",
    rating: 4.8,
    reviewCount: 1247,
    price: "$41.99",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71xeRf1-jCL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCG1JGKN",
    description:
      "The HOTO Mini Bike Tire Pump is a game-changer for cyclists. With 25-second fast inflation and 150PSI maximum pressure, this portable electric pump handles road bikes, mountain bikes, motorcycles, cars, and sports balls with ease. Features both Presta and Schrader valve compatibility, built-in pressure gauge, and USB-C rechargeable battery for ultimate convenience.",
    features: [
      "25-second ultra-fast inflation",
      "150PSI maximum pressure capacity",
      "Dual valve compatibility (Presta & Schrader)",
      "Built-in digital pressure gauge with LED display",
      "USB-C rechargeable 2000mAh battery",
      "Compact and portable design (fits in pocket)",
      "Auto shut-off when target pressure reached",
      "Emergency LED flashlight included",
      "Inflates bikes, motorcycles, cars, and sports balls",
      "Lightweight at only 14.8 ounces",
    ],
    specs: {
      Weight: "14.8 ounces",
      Dimensions: "4.7 x 2.4 x 1.6 inches",
      Battery: "2000mAh Lithium-ion",
      Charging: "USB-C (2 hours full charge)",
      MaxPressure: "150 PSI",
      InflationTime: "25 seconds (road bike tire)",
      Valves: "Presta & Schrader",
      Display: "Digital LED",
      Warranty: "1 year",
    },
  },
  "smith-dispatch-mips-helmet": {
    name: "SMITH Dispatch MIPS Cycling Helmet",
    rating: 4.8,
    reviewCount: 1543,
    price: "$120.00",
    category: "Safety",
    image: "https://m.media-amazon.com/images/I/61ABm3iKpUL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/SMITH-Dispatch-MIPS-Cycling-Helmet/dp/B0B1RR3J38",
    description:
      "The SMITH Dispatch MIPS Cycling Helmet combines cutting-edge safety technology with premium comfort and style. Featuring MIPS (Multi-directional Impact Protection System) for enhanced brain protection during angled impacts, this helmet is engineered for serious cyclists who demand the best. The lightweight in-mold construction, superior ventilation system, and VaporFit adjustment system ensure a perfect fit for all-day comfort on road or trail.",
    features: [
      "MIPS technology for enhanced rotational impact protection",
      "Lightweight in-mold construction (280g)",
      "21 optimized vents for superior airflow",
      "VaporFit adjustable fit system with dial adjustment",
      "Koroyd material for improved impact absorption",
      "AirEvac ventilation system integrates with eyewear",
      "Reflective details for low-light visibility",
      "Ionic+ antimicrobial padding",
      "Available in multiple sizes (S, M, L)",
      "Meets CPSC and CE EN 1078 safety standards",
    ],
    specs: {
      Weight: "280 grams (Medium)",
      Sizes: "Small (51-55cm), Medium (55-59cm), Large (59-63cm)",
      Vents: "21 optimized vents",
      Technology: "MIPS + Koroyd",
      FitSystem: "VaporFit dial adjustment",
      Padding: "Ionic+ antimicrobial",
      Certification: "CPSC, CE EN 1078",
      Colors: "Matte Black, White, Blue, Red",
      Warranty: "Lifetime (crash replacement available)",
    },
  },
}

const customerReviews = [
  {
    name: "Alex Thompson",
    rating: 5,
    date: "March 15, 2024",
    review:
      "Absolutely brilliant! The brightness is incredible and the battery lasts for hours. Perfect for my night commutes through the city. The neon glow effect is a nice touch too!",
    helpful: 24,
    verified: true,
  },
  {
    name: "Sarah Chen",
    rating: 5,
    date: "March 12, 2024",
    review:
      "Best investment I've made for my e-bike. The quality is outstanding and it works exactly as advertised. Installation was super easy too.",
    helpful: 18,
    verified: true,
  },
  {
    name: "Mike Rodriguez",
    rating: 4,
    date: "March 10, 2024",
    review:
      "Great product overall. Does exactly what it's supposed to do. Only minor complaint is I wish it came in more color options, but that's just personal preference.",
    helpful: 15,
    verified: true,
  },
]

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Reviews
        </Link>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
              {product.category}
            </Badge>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-accent">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* CTA Button */}
            <Link href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="w-full bg-accent text-background hover:bg-accent/90 shadow-[0_0_20px_rgba(0,240,160,0.5)] hover:shadow-[0_0_40px_rgba(0,240,160,0.8)] transition-all"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy on Amazon
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Specifications */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center pb-4 border-b border-accent/10">
                <span className="font-medium">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Customer Reviews */}
        <div className="mb-12">
          <h2 className="text-2xl font-orbitron font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {customerReviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{review.name}</h3>
                      {review.verified && <Badge className="bg-accent/20 text-accent text-xs">Verified Purchase</Badge>}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed">{review.review}</p>

                {/* Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-accent/10">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
