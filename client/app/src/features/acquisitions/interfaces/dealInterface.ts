export interface Root {
    users: User[]
    deals: Deal[]
  }
  
  export interface User {
    username: string
    email: string
    password: string
    phone: string
    roles: string[]
    messages: string[]
    likedDeals: any[]
  }
  
  export interface Deal {
    productName: string
    dealManagerId: string
    description: string
    length: number
    width: number
    height: number
    depth: number
    interiorMaterial: string
    exteriorMaterial: string
    location: string
    pictures: Picture[]
    priceOffers: PriceOffer[]
    group: string[]
    amount: Amount
    endDate: string
    createdDate: string
    status: string
  }
  
  export interface Picture {
    imgUrl: string
    imgDescription: string
  }
  
  export interface PriceOffer {
    sellerID: string
    price: number
  }
  
  export interface Amount {
    current: number
    target: number
  }

  export const data: Root = {
    users: [
      {
        username: "user1",
        email: "user1@example.com",
        password: "pass1",
        phone: "111-111-1111",
        roles: ["Customer"],
        messages: ["Hello from user1!", "This is a message from user1."],
        likedDeals: [],
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: "pass2",
        phone: "222-222-2222",
        roles: ["Customer"],
        messages: ["Greetings from user2!", "Message content from user2."],
        likedDeals: [],
      },
      {
        username: "seller1",
        email: "seller1@example.com",
        password: "sellerpass1",
        phone: "333-333-3333",
        roles: ["Seller"],
        messages: ["Welcome to the platform, seller1!", "This is a message for seller1."],
        likedDeals: [],
      },
    ],
    deals: [
      {
        productName: "מטבח מודרני",
        dealManagerId: "seller1",
        length: 250, // in cm
        width: 300, // in cm  
        height: 90, // in cm
        depth: 60, // in cm
        interiorMaterial: "עץ אגוז",
        exteriorMaterial: "פורמייקה",
        location: "תל אביב",
        description: "מטבח מודרני בגווני לבן ואפור. המטבח כולל שיש אבן קיסר איכותי, ארונות מטבח תחתונים ועליונים בגימור לבן מבריק, יחידת  עם כיריים, תנור ומקרר משולבים.",
        pictures: [
          { imgUrl: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg", imgDescription: "Image 1" },
          { imgUrl: "https://example.com/dealA_image2.jpg", imgDescription: "Image 2" },
        ],
        priceOffers: [
          { sellerID: "seller1", price: 50 },
          { sellerID: "user1", price: 45 },
        ],
        
        group: ["user1", "seller1"],
        amount: { current: 10, target: 20 },
        endDate: "2023-03-01T23:59:59Z",
        createdDate: "2023-02-01T12:00:00Z",
        status: "in-progress",
      },
      {
        productName: "מטבח מודרני",
        dealManagerId: "seller1",
        length: 250, // in cm
        width: 300, // in cm  
        height: 90, // in cm
        depth: 60, // in cm
        interiorMaterial: "עץ אגוז",
        exteriorMaterial: "פורמייקה",
        location: "תל אביב",
        description: "מטבח מודרני בגווני לבן ואפור. המטבח כולל שיש אבן קיסר איכותי, ארונות מטבח תחתונים ועליונים בגימור לבן מבריק, יחידת  עם כיריים, תנור ומקרר משולבים.",
        pictures: [
          { imgUrl: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg", imgDescription: "Image 1" },
          { imgUrl: "https://example.com/dealA_image2.jpg", imgDescription: "Image 2" },
        ],
        priceOffers: [
          { sellerID: "seller1", price: 50 },
          { sellerID: "user1", price: 45 },
        ],
        
        group: ["user1", "seller1"],
        amount: { current: 10, target: 20 },
        endDate: "2023-03-01T23:59:59Z",
        createdDate: "2023-02-01T12:00:00Z",
        status: "in-progress",
      },
    ],
  };