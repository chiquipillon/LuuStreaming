import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function CartSheet() {
  const { items, removeFromCart, updateQuantity, total, itemCount, clearCart } = useCart();

  const handleCheckout = () => {
    const productList = items
      .map((item) => `${item.name} x${item.quantity} (S/${(item.price * item.quantity).toFixed(2)})`)
      .join("%0A");
    const totalAmount = total.toFixed(2);
    const message = `Hola! Quiero realizar una compra:%0A%0A${productList}%0A%0ATotal: S/${totalAmount}`;
    window.open(`https://wa.me/51986558522?text=${message}`, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          data-testid="button-cart-toggle"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              data-testid="badge-cart-count"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg" data-testid="sheet-cart">
        <SheetHeader>
          <SheetTitle data-testid="text-cart-title">Carrito de Compras</SheetTitle>
          <SheetDescription data-testid="text-cart-description">
            {itemCount > 0
              ? `Tienes ${itemCount} ${itemCount === 1 ? "producto" : "productos"} en tu carrito`
              : "Tu carrito está vacío"}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-12rem)]">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground" data-testid="text-cart-empty">
                  No hay productos en tu carrito
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4" data-testid="list-cart-items">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-border rounded-lg"
                    data-testid={`item-cart-${item.id}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1" data-testid={`text-cart-item-name-${item.id}`}>
                        {item.name}
                      </h4>
                      <p className="text-sm text-primary font-bold mb-2" data-testid={`text-cart-item-price-${item.id}`}>
                        S/{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          data-testid={`button-cart-decrease-${item.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center" data-testid={`text-cart-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          data-testid={`button-cart-increase-${item.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={() => removeFromCart(item.id)}
                      data-testid={`button-cart-remove-${item.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary" data-testid="text-cart-total">
                    S/{total.toFixed(2)}
                  </span>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                  onClick={handleCheckout}
                  data-testid="button-cart-checkout"
                >
                  <MessageCircle className="h-5 w-5" />
                  Realizar Pedido por WhatsApp
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                  data-testid="button-cart-clear"
                >
                  Vaciar Carrito
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
