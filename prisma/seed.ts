import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17220',
      name: 'Example phone #1',
      price: 450,
      rate: 5,
      image: 'phone.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17221',
      name: 'Example phone #2',
      price: 4550,
      rate: 5,
      image: 'laptop.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17222',
      name: 'Example phone #3',
      price: 2350,
      rate: 5,
      image: 'laptop.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17223',
      name: 'Example phone #4',
      price: 450,
      rate: 2,
      image: 'phone.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17224',
      name: 'Example phone #5',
      price: 3299,
      rate: 3,
      image: 'laptop.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17225',
      name: 'Example phone #6',
      price: 800,
      rate: 5,
      image: 'phone.jpg',
      description: 'Example description for phone'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17226',
      name: 'Example phone #7',
      price: 120,
      rate: 4,
      image: 'phone.jpg',
      description: 'Example description for phone'
    },
  ]
}

// function getOrders() {
//   return [
//     {
//       id: '01c7599d-318b-4b9f-baf7-51f3a936a1d0',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17212'
//     },
//     {
//       id: '01c7599d-318b-4b9f-baf7-51f3a936a1d1',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17212'
//     },
//     {
//       id: '01c7599d-318b-4b9f-baf7-51f3a936a1d2',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202'
//     },
//   ]
// }

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product })
    })
  )

  // await Promise.all(
  //   getOrders().map(({ productId, ...orderData }) => {
  //     return db.order.create({
  //       data: {
  //         ...orderData,
  //         product: {
  //           connect: { id: productId },
  //         },
  //       },
  //     });
  //   }),
  // );
}

seed();