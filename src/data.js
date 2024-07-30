const data = {
  heroSectionCard: {
    card1: {
      image: "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",
      title: "Manhattan Style",
      description: "Lorem ipsum dolor sit amet, conser adipiscing elit",
      starImg: "/assets/bx_bxs-star.png",
      rating: 5,
    },
    card2: {
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",
      title: "as",
      description: "Lorem ipsum dolor sit amet, conser adipiscing elit",
      starImg: "/assets/bx_bxs-star.png",
      rating: 4.5,
    },
    card3: {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
      title: "reza",
      description: "Lorem ipsum dolor sit amet, conser adipiscing elit",
      starImg: "/assets/bx_bxs-star.png",
      rating: 3.5,
    },
    // Add more cards as needed
  },

  HeroSectionPartnershipImg: {
    image1: "/assets/traveloka_logo 2.png",
    image2: "/assets/traveloka_logo 3.png",
    image3: "/assets/traveloka_logo 4.png",
    image4: "/assets/traveloka_logo 5.png",
  },

  RecommendationSectionCard: {
    card1: {
      id: 1,
      type: "house",
      CardTag: "Popular",

      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
      icon: "/fire-filled.svg",

      textColor: "text-red-600 ",
      bgColor: "bg-[#FEE2E2]",

      title: "Roselands House",
      description: "Beautiful family home with spacious interiors",
      price: "$35,000,000",

      agent: {
        name: "John Doe",
        location: "California",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      },
    },
    card2: {
      id: 2,
      type: "house",
      CardTag: "Best Deals",

      image:
        "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",

      icon: "/entypo_wallet.svg",
      textColor: "text-green-800",
      bgColor: "bg-[#D1FAE5]",

      title: "Sunnyvale Villa",
      description: "Luxurious villa with stunning views",
      price: "$45,000,000",

      agent: {
        name: "Jane Smith",
        location: "Miami, Florida",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      },
    },
    card3: {
      id: 3,
      type: "Villa",
      CardTag: "New house",

      image:
        "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",

      icon: "/house-fill.svg",
      textColor: "text-blue-800",
      bgColor: "bg-[#DBEAFE]",

      title: "Majestic Retreat",
      description: "Secluded villa surrounded by nature",
      price: "$25,000,000",

      agent: {
        name: "Michael Brown",
        location: "Aspen, Colorado",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    },
    card4: {
      id: 4,
      type: "villa",
      CardTag: "Best Deals",

      image:
        "https://plus.unsplash.com/premium_photo-1682889762731-375a6b22d794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHwwfDB8fHww",

      icon: "/entypo_wallet.svg",
      textColor: "text-green-800",
      bgColor: "bg-[#D1FAE5]",

      title: "Oceanfront Oasis",
      description: "Exquisite villa with private beach access",
      price: "$55,000,000",
      agent: {
        name: "Emily Johnson",
        location: "Honolulu, Hawaii",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    },
    card5: {
      id: 5,
      type: "villa",
      CardTag: "New house",

      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHwwfDB8fHww",

      icon: "/house-fill.svg",
      textColor: "text-blue-800",
      bgColor: "bg-[#DBEAFE]",

      title: "Tranquil Haven",
      description: "Peaceful villa nestled in lush greenery",
      price: "$40,000,000",
      agent: {
        name: "William Davis",
        location: "Santa Barbara, California",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      },
    },
    card6: {
      id: 6,
      type: "apartment",
      CardTag: "Popular",

      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHwwfDB8fHww",

      icon: "/fire-filled.svg",
      textColor: "text-red-600",
      bgColor: "bg-[#FEE2E2]",

      title: "Cityscape Loft",
      description: "Modern apartment with panoramic city views",
      price: "$20,000,000",
      agent: {
        name: "Daniel Wilson",
        location: "New York City, New York",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    },
    card7: {
      id: 7,
      type: "apartment",
      CardTag: "Best Deals",

      image:
        "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHwwfDB8fHww",

      icon: "/entypo_wallet.svg",
      textColor: "text-green-800",
      bgColor: "bg-[#D1FAE5]",

      title: "Skyline View Residence",
      description: "Elegant apartment overlooking the city skyline",
      price: "$30,000,000",
      agent: {
        name: "Jessica Thompson",
        location: "Chicago, Illinois",
        avatar: "https://randomuser.me/api/portraits/men/16.jpg", // Path to agent's avatar
      },
    },
    card8: {
      id: 8,
      type: "apartment",
      CardTag: "New house",

      image:
        "https://images.unsplash.com/photo-1543489822-c49534f3271f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",

      icon: "/house-fill.svg",
      textColor: "text-blue-800",
      bgColor: "bg-[#DBEAFE]",

      title: "Urban Retreat",
      description: "Chic apartment in the heart of downtown",
      price: "$25,000,000",
      agent: {
        name: "Matthew Clark",
        location: "San Francisco, California",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    // Add more cards as needed
  },

  SellSection: {
    managerInfo: {
      name: "Ashik Reza",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    PropertyVideo: "/Real Estate Logo - Opener After Effects Templates.mp4",
  },

  ReviewSection: {
    reviewCard1: {
      cardImg:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reviewTitle: "Excellent Service and Quality!",
      reviewDescription:
        "I was extremely satisfied with the service provided. The team went above and beyond to ensure all my needs were met. Highly recommended!",
      auther: {
        name: "Ashik Reza",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        location: "Shibchar",
      },
      ratingNum: "1.2",
      ratingImg: "/assets/bx_bxs-star.png",
    },
    reviewCard2: {
      cardImg:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhfGVufDB8fDB8fHww",
      reviewTitle: "Great Experience!",
      reviewDescription:
        "I had a wonderful experience with this company. The staff was friendly and professional, and the quality of their work exceeded my expectations. Would definitely use their services again!",
      auther: {
        name: "Same Reza",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        location: "Madaripur",
      },
      ratingNum: "4.2",
      ratingImg: "/assets/bx_bxs-star.png",
    },
    reviewCard3: {
      cardImg:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D",
      reviewTitle: "Average Service",
      reviewDescription:
        "The service provided was satisfactory, but there is room for improvement. Some aspects could have been better managed. Overall, an okay experience.",
      auther: {
        name: "Kabir Reza",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        location: "Madaripur",
      },
      ratingNum: "2.2",
      ratingImg: "/assets/bx_bxs-star.png",
    },
  },

  TipsSection: {
    TipsSectionLeft: {
      smallCard1: {
        title: "The things we need to check when we want to buy a house",
        description: "",
        cardImg:
          "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHwwfDB8fHww",
        auther: {
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          name: "Samuel",
        },
        data: "4 min read | 25 Apr 2021",
      },
      smallCard2: {
        title: "The best way to know the quality of the house we want to buy",
        description: "",
        cardImg:
          "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",
        auther: {
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          name: "Thompson",
        },
        data: "4 min read | 25 Apr 2021",
      },
      smallCard3: {
        title: "7 Ways to distinguish the quality of the house we want to buy",
        description: "",
        cardImg:
          "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",
        auther: {
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          name: "Sophia",
        },
        data: "4 min read | 25 Apr 2021",
      },
    },

    TipsSectionRight: {
      BigCard: {
        title: "12 Things to know before buying a house",
        description:
          "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
        cardImg:
          "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8MHwwfHx8MA%3D%3D",
        auther: {
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
          name: "Isabella Martinez",
        },
        data: "4 min read | 25 Apr 2021",
      },
    },
  },

  // Add more sections of data as needed
};

export default data;
