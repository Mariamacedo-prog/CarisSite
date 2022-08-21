export interface SliderImage {
  img: String,
  alt: String,
  description: String,
  statusEnum: String,
  link: {
    href:String,
    blank: boolean
  },
  text: {
    title: String, 
    subtitle:String,
    status: String
  }
}