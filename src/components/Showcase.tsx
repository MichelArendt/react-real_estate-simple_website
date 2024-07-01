import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from './Video';

interface ImagesType {
  '203': string[];
  '301': string[];
  'condominio': string[];
}

interface PropertyDetail {
  label: string;
  value: string;
}

type Props = {
  id: keyof ImagesType,
  title: string,
  subtitle: string,
  description: string,
  highlights: PropertyDetail[],
  description2?: string,
  mediaIdentifier?: string,
  style?: string,
  extra?: React.ReactNode,
}

const Showcase = ({id, title, subtitle, description, highlights, description2, mediaIdentifier, style, extra}: Props) => {
  const [open, setOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const images: ImagesType = {
    '203': ['aptos-31.jpg', 'aptos-32.jpg', 'aptos-33.jpg', 'aptos-34.jpg', 'aptos-35.jpg', 'aptos-36.jpg', 'aptos-37.jpg', 'aptos-38.jpg', 'aptos-39.jpg', 'aptos-40.jpg', 'aptos-41.jpg', 'aptos-42.jpg', 'aptos-43.jpg', 'aptos-44.jpg', 'aptos-45.jpg', 'aptos-46.jpg', 'aptos-47.jpg', 'aptos-48.jpg', 'aptos-49.jpg', 'aptos-50.jpg', 'aptos-51.jpg', 'aptos-52.jpg', 'aptos-53.jpg', 'aptos-54.jpg', 'aptos-55.jpg', 'aptos-56.jpg', 'aptos-57.jpg', 'aptos-58.jpg', 'aptos-59.jpg'],

    '301': ['aptos-60.jpg', 'aptos-61.jpg', 'aptos-62.jpg', 'aptos-63.jpg', 'aptos-64.jpg', 'aptos-65.jpg', 'aptos-66.jpg', 'aptos-67.jpg', 'aptos-68.jpg', 'aptos-69.jpg', 'aptos-70.jpg', 'aptos-71.jpg', 'aptos-72.jpg', 'aptos-73.jpg', 'aptos-74.jpg', 'aptos-75.jpg', 'aptos-76.jpg', 'aptos-77.jpg', 'aptos-78.jpg', 'aptos-79.jpg', 'aptos-80.jpg', 'aptos-81(1).jpg', 'aptos-81.jpg', 'aptos-82(1).jpg', 'aptos-82.jpg', 'aptos-83.jpg', 'aptos-84.jpg', 'aptos-85.jpg', 'aptos-86.jpg', 'aptos-87.jpg', 'aptos-88.jpg', 'aptos-89.jpg', 'aptos-90.jpg', 'aptos-91.jpg', 'aptos-92.jpg', 'aptos-93.jpg', 'aptos-94.jpg', 'aptos-95.jpg', 'aptos-96.jpg', 'aptos-97.jpg', 'aptos-98.jpg', 'aptos-99.jpg', 'aptos-100.jpg', 'aptos-101.jpg', 'aptos-102(1).jpg', 'aptos-102.jpg', 'aptos-103(1).jpg', 'aptos-103.jpg', 'aptos-104.jpg', 'aptos-105(1).jpg', 'aptos-105.jpg', 'aptos-106.jpg', 'aptos-108.jpg', 'aptos-109.jpg', 'aptos-110.jpg', 'aptos-111.jpg', 'aptos-112.jpg', 'aptos-113.jpg'],

    'condominio': ['aptos-2.jpg', 'aptos-3.jpg', 'aptos-4.jpg', 'aptos-5.jpg', 'aptos-6.jpg', 'aptos-7.jpg', 'aptos-8.jpg', 'aptos-9.jpg', 'aptos-10.jpg', 'aptos-11.jpg', 'aptos-12.jpg', 'aptos-13.jpg', 'aptos-14.jpg', 'aptos-15.jpg', 'aptos-16.jpg', 'aptos-17.jpg', 'aptos-18.jpg', 'aptos-19.jpg', 'aptos-20.jpg', 'aptos-21.jpg', 'aptos-22.jpg', 'aptos-23.jpg', 'aptos-24.jpg', 'aptos-25.jpg', 'aptos-26.jpg', 'aptos-27.jpg', 'aptos-28.jpg', 'aptos-29.jpg', 'aptos-30.jpg', 'aptos-115.jpg', 'aptos-116.jpg', 'aptos.jpg']
  };

  if (!images[id]) {
    return <p>Invalid ID: {id}</p>;
  }

  // Function to open the lightbox on a specific image index
  const openLightboxOnImage = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <article className={`showcase ${style || ''}`} id={id}>
      <div className='showcase__carousel' aria-label={`Fotos ${title}`}>
        <Carousel>
          <CarouselContent>
            {images[id].map((file: string, index: number) => (
              <CarouselItem key={file} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <img
                  src={`/imgs/${id}/thumbnail/${file}`}
                  alt={file}
                  onClick={() => openLightboxOnImage(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-arrow-prev" />
          <CarouselNext className="carousel-arrow-next" />
        </Carousel>
      </div>

      <section className="showcase__title" aria-labelledby='showcase__title-h1'>
        <h1>{title}
          <span id="showcase__title-h1">{subtitle}</span>
        </h1>
      </section>

      <section className='showcase__description text__paragraph' aria-label='Características do imóvel'>
        {description}

        <ul className='showcase__description-highlights'>
          {
            highlights.map((highlight, index) => (
              <li key={index}><span style={{margin: '5px'}}><strong>{highlight.label}</strong> {highlight.value}</span></li>
            ))
          }
        </ul>

        {description2}
      </section>

      {mediaIdentifier && (
        <div className='video-container' aria-label='Vídeo do imóvel'>
          <Video fileName={mediaIdentifier} controls classes='showcase__video' />
        </div>
      )}

      {extra && (
      <div className='showcase__location'aria-label='Localização do empreendimento'>
          {extra}
        </div>
      )}

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        index={photoIndex} // Pass the initial index here
        slides={
          images[id].map((file: string) => ({
            src: `/imgs/${id}/${file}`,
            alt: file
          }) )
        }
      />
    </article>
  )
}

export default Showcase;