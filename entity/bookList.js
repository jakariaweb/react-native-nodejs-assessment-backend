const bookList = [
  {
    id: 1,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 10,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 2,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 20,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 3,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 15,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 4,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 5,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 5,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 12,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 6,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 8,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 7,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 18,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 8,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 25,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 9,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 13,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
  {
    id: 10,
    title: '레이블라우스',
    description:
      "Description of the book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    discountRate: 7,
    coverImage:
      'https://res.cloudinary.com/dwn02nfdv/image/upload/v1687889770/preview-image_dahk6t.png',
    price: 57600,
  },
]

module.exports = bookList
