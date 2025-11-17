import { type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;

  constructor() {
    this.products = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: InsertProduct[] = [
      {
        name: "NETFLIX POR CODIGO TV",
        price: 10,
        category: "Streaming",
        platform: "Netflix",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netflix/netflix-original.svg",
      },
      {
        name: "NETFLIX PREMIUM",
        price: 12,
        category: "Streaming",
        platform: "Netflix",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netflix/netflix-original.svg",
      },
      {
        name: "DISNEY PREMIUM",
        price: 11,
        category: "Streaming",
        platform: "Disney+",
        image: "https://img.icons8.com/color/96/disney-plus.png",
      },
      {
        name: "DISNEY STANDAR",
        price: 8,
        category: "Streaming",
        platform: "Disney+",
        image: "https://img.icons8.com/color/96/disney-plus.png",
      },
      {
        name: "HBO MAX",
        price: 6,
        category: "Streaming",
        platform: "HBO Max",
        image: "https://img.icons8.com/color/96/hbo-max.png",
      },
      {
        name: "PRIME VIDEO",
        price: 7,
        category: "Streaming",
        platform: "Prime Video",
        image: "https://img.icons8.com/color/96/amazon-prime-video.png",
      },
      {
        name: "PARAMOUNT",
        price: 6,
        category: "Streaming",
        platform: "Paramount",
        image: "https://img.icons8.com/color/96/paramount-plus.png",
      },
      {
        name: "CRUNCHYROLL",
        price: 5.50,
        category: "Streaming",
        platform: "Crunchyroll",
        image: "https://img.icons8.com/color/96/crunchyroll.png",
      },
      {
        name: "IPTV",
        price: 10,
        category: "Streaming",
        platform: "IPTV",
        image: "https://img.icons8.com/color/96/tv.png",
      },
      {
        name: "FLUJO TV",
        price: 15,
        category: "Streaming",
        platform: "Flujo TV",
        image: "https://img.icons8.com/color/96/live-video-on.png",
      },
      {
        name: "VIX",
        price: 6,
        category: "Streaming",
        platform: "Vix",
        image: "https://img.icons8.com/color/96/vix.png",
      },
      {
        name: "YOUTUBE PREMIUM",
        price: 5,
        category: "Streaming",
        platform: "YouTube",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/youtube/youtube-original.svg",
      },
      {
        name: "YOUTUBE PREMIUM RENOVABLE",
        price: 10,
        category: "Streaming",
        platform: "YouTube",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/youtube/youtube-original.svg",
      },
      {
        name: "SPOTIFY 1 MES",
        price: 10,
        category: "Music",
        platform: "Spotify",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spotify/spotify-original.svg",
      },
      {
        name: "SPOTIFY 3 MESES",
        price: 18,
        category: "Music",
        platform: "Spotify",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spotify/spotify-original.svg",
      },
      {
        name: "CANVA PRO",
        price: 6,
        category: "Editores",
        platform: "Canva",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
      {
        name: "CHAT GPT PLUS",
        price: 12,
        category: "IA",
        platform: "ChatGPT",
        image: "https://img.icons8.com/color/96/chatgpt.png",
      },
      {
        name: "APPLE TV",
        price: 10,
        category: "Streaming",
        platform: "Apple TV",
        image: "https://img.icons8.com/color/96/apple-tv.png",
      },
      {
        name: "GEMINIS",
        price: 8.50,
        category: "IA",
        platform: "Gemini",
        image: "https://img.icons8.com/color/96/google-gemini.png",
      },
    ];

    initialProducts.forEach((product) => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
