import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Search, MessageCircle, Star, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCart } from "@/contexts/CartContext";
import { CartSheet } from "@/components/CartSheet";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "Todos",
  "Streaming",
  "Music",
  "Editores",
  "IA",
];

const platformLogos = [
  { name: "Netflix", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netflix/netflix-original.svg" },
  { name: "Disney+", logo: "https://img.icons8.com/color/96/disney-plus.png" },
  { name: "HBO Max", logo: "https://img.icons8.com/color/96/hbo-max.png" },
  { name: "Spotify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spotify/spotify-original.svg" },
  { name: "Prime Video", logo: "https://img.icons8.com/color/96/amazon-prime-video.png" },
  { name: "Paramount", logo: "https://img.icons8.com/color/96/paramount-plus.png" },
  { name: "Crunchyroll", logo: "https://img.icons8.com/color/96/crunchyroll.png" },
  { name: "YouTube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/youtube/youtube-original.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Apple TV", logo: "https://img.icons8.com/color/96/apple-tv.png" },
];

const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    rating: 5,
    comment: "Excelente servicio! Mi cuenta de Netflix funciona perfecto y la atención por WhatsApp fue muy rápida.",
    service: "Netflix Premium",
  },
  {
    id: 2,
    name: "María G.",
    rating: 5,
    comment: "100% recomendado. Los precios son muy accesibles y el soporte es inmediato. Ya compré varias veces.",
    service: "Spotify 3 Meses",
  },
  {
    id: 3,
    name: "Luis P.",
    rating: 5,
    comment: "Muy confiable. Llevo 6 meses comprando aquí y nunca he tenido problemas. Servicio de calidad.",
    service: "Disney Premium",
  },
  {
    id: 4,
    name: "Ana R.",
    rating: 4,
    comment: "Buen servicio y precios justos. La entrega fue rápida como prometieron. Volveré a comprar.",
    service: "HBO Max",
  },
  {
    id: 5,
    name: "Roberto S.",
    rating: 5,
    comment: "Increíble atención al cliente. Tuve una duda y me la resolvieron al instante por WhatsApp. Muy profesionales.",
    service: "YouTube Premium",
  },
  {
    id: 6,
    name: "Patricia L.",
    rating: 5,
    comment: "Los mejores precios que encontré. El servicio funciona perfecto y la garantía me da mucha confianza.",
    service: "Canva Pro",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20 -z-10" />
      
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl border-b border-border/40 bg-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-8">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" data-testid="text-logo">
              Luu Stream
            </h1>
            
            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <a href="#productos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-productos">
                Productos
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-comunidad">
                Comunidad
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-faq">
                FAQ
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terminos">
                Términos
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-reviews">
                Reviews
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <CartSheet />
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white gap-2 whitespace-nowrap"
                data-testid="button-whatsapp-header"
              >
                <a
                  href="https://wa.me/51986558522"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Contactar</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" data-testid="text-hero-title">
            Luu Stream
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-6" data-testid="text-hero-subtitle">
            Servicios de Streaming Premium
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-hero-description">
            Accede a tus plataformas favoritas a los mejores precios. Entrega inmediata por WhatsApp.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            data-testid="button-whatsapp-hero"
          >
            <a
              href="https://wa.me/51986558522"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12 border-y border-border/40 overflow-hidden bg-background/50 backdrop-blur-sm">
        <div className="space-y-8">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {[...platformLogos, ...platformLogos].map((platform, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  data-testid={`logo-marquee-${platform.name.toLowerCase().replace(/\s+/g, '-')}-${idx}`}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-90"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-reverse gap-8">
              {[...platformLogos, ...platformLogos].map((platform, idx) => (
                <div
                  key={`reverse-${idx}`}
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  data-testid={`logo-marquee-reverse-${platform.name.toLowerCase().replace(/\s+/g, '-')}-${idx}`}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-90"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sticky top-16 z-40 backdrop-blur-xl border-b border-border/40 bg-background/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-card-border"
                data-testid="input-search"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`badge-category-${category.toLowerCase()}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="productos">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-24 w-24 mx-auto mb-4 rounded-lg" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-8 w-1/2 mx-auto" />
                </Card>
              ))}
            </div>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:from-primary/20 group-hover:to-blue-500/20 transition-all">
                      <img
                        src={product.image}
                        alt={product.platform}
                        className="w-full h-full object-contain brightness-0 invert opacity-90"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-semibold text-lg leading-tight" data-testid={`text-product-name-${product.id}`}>
                        {product.name}
                      </h3>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent" data-testid={`text-product-price-${product.id}`}>
                        S/{product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-full space-y-2">
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                        onClick={() => {
                          addToCart(product);
                          toast({
                            title: "Producto agregado",
                            description: `${product.name} se agregó al carrito`,
                          });
                        }}
                        data-testid={`button-add-to-cart-${product.id}`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Agregar al Carrito
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full gap-2"
                        data-testid={`button-buy-${product.id}`}
                      >
                        <a
                          href={`https://wa.me/51986558522?text=Hola, quiero comprar ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Comprar Ahora
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground" data-testid="text-no-products">
                No se encontraron productos
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent" data-testid="text-reviews-title">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-reviews-subtitle">
            Miles de clientes satisfechos confían en nosotros para sus servicios de streaming
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-review-${testimonial.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold" data-testid={`text-review-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mt-1" data-testid={`stars-review-${testimonial.id}`}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3" data-testid={`text-review-comment-${testimonial.id}`}>
                  "{testimonial.comment}"
                </p>
                <Badge variant="secondary" className="text-xs" data-testid={`badge-review-service-${testimonial.id}`}>
                  {testimonial.service}
                </Badge>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">¿Quieres ser parte de nuestros clientes satisfechos?</p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              data-testid="button-reviews-cta"
            >
              <a
                href="https://wa.me/51986558522?text=Hola, quiero realizar una compra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Comprar Ahora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent" data-testid="text-faq-title">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-muted-foreground mb-12" data-testid="text-faq-subtitle">
            Todo lo que necesitas saber sobre nuestros servicios
          </p>
          
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            <AccordionItem value="item-1" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-1">
                ¿Cómo recibo mi cuenta después de comprar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-1">
                Después de confirmar tu compra por WhatsApp, recibirás los datos de acceso de tu cuenta de forma inmediata. El tiempo de entrega es de 5 a 15 minutos máximo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-2">
                ¿Las cuentas son compartidas o privadas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-2">
                Ofrecemos ambas opciones. Las cuentas compartidas tienen un precio más accesible, mientras que las cuentas premium privadas te dan acceso exclusivo. Consulta los detalles de cada servicio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-3">
                ¿Cuánto tiempo dura el servicio?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-3">
                La duración varía según el servicio. Generalmente, las suscripciones tienen una duración de 1 mes. Los servicios renovables se indican específicamente en el nombre del producto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-4">
                ¿Qué métodos de pago aceptan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-4">
                Aceptamos transferencias bancarias, Yape, Plin y otros métodos de pago digital. Contáctanos por WhatsApp para conocer todas las opciones disponibles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-5">
                ¿Ofrecen garantía o soporte?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-5">
                Sí, todos nuestros servicios incluyen garantía. Si tienes algún problema con tu cuenta, contáctanos por WhatsApp y lo resolveremos de inmediato. Estamos disponibles para brindarte soporte cuando lo necesites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-card-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline" data-testid="trigger-faq-6">
                ¿Puedo cambiar mi plan después de comprarlo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="content-faq-6">
                Sí, puedes actualizar tu plan en cualquier momento. Contáctanos por WhatsApp y te ayudaremos con el proceso de actualización.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">¿Tienes más preguntas?</p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
              data-testid="button-faq-whatsapp"
            >
              <a
                href="https://wa.me/51986558522?text=Hola, tengo una pregunta sobre los servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 mt-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Luu Stream
              </h3>
              <p className="text-muted-foreground">
                Tus servicios de streaming favoritos a los mejores precios.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-muted-foreground mb-4">
                WhatsApp: +51 986 558 522
              </p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white gap-2"
                data-testid="button-whatsapp-footer"
              >
                <a
                  href="https://wa.me/51986558522"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contactar
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
            <p>© 2024 Luu Stream. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/51986558522"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        data-testid="button-whatsapp-fab"
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
