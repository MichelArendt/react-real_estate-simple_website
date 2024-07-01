import Showcase from '@/components/Showcase';
import Video from '@/components/Video';

const Homepage = () => {
  return (
    <main>
      <article>
        <section aria-label='Vídeo do empreendimento'>
          <Video fileName='video_banner' autoPlay muted loop classes='video-container' />
        </section>

        <section className='banner__description' aria-labelledby='banner__description-id'>
          <span id="banner__description-id">Bombinhas / SC</span>
          <span>Localizado no início da praia de Mariscal, 150 metros do mar em rua sem saída</span>
        </section>
      </article>

      <Showcase
        id='301'
        title="Cobertura Duplex 301"
        subtitle="R$ 2.150.000,00"
        description='Apresentamos uma cobertura deslumbrante com vista para a magnífica Praia de Mariscal em Bombinhas, SC. Esta propriedade única oferece o equilíbrio perfeito entre luxo e conforto, ideal para aqueles que buscam um refúgio elegante próximo ao mar.'
        highlights={[
          { label: 'Área Total:', value: '200,3 m²' },
          { label: 'Área Privativa:', value: '158 m²' },
          { label: 'Suítes:', value: '3 espaçosas suítes, proporcionando privacidade e conforto' },
          { label: 'Garagem:', value: '2 vagas de garagem exclusivas' },
          { label: 'Piscina Privativa:', value: 'Aproveite momentos de lazer e relaxamento na sua própria piscina' },
          { label: 'Proximidade da Praia:', value: 'Localizada a apenas 100 metros das areias douradas e águas cristalinas da Praia de Mariscal' },
        ]}
        description2='Além dessas características excepcionais, a cobertura oferece amplos espaços para receber amigos e familiares, permitindo que você desfrute de uma vida social vibrante e requintada. Não perca esta oportunidade única de adquirir um imóvel exclusivo em uma das regiões mais belas de Santa Catarina. Agende uma visita e venha viver o sonho de ter um lar no paraíso.'
        mediaIdentifier='301'
        style='background__primary-muted background-color-full_width'
      />

      <Showcase
        id='203'
        title="Apartamento Tipo 203"
        subtitle="R$ 1.000.000,00"
        description='Apresentamos um apartamento exclusivo, situado em uma rua sem saída, a apenas 150 metros da deslumbrante Praia do Mariscal. Este imóvel combina conforto, praticidade e uma localização privilegiada para quem deseja viver próximo ao mar.'
        highlights={[
          { label: 'Área Total:', value: '103,3 m²' },
          { label: 'Área Privativa:', value: '78,5 m²' },
          { label: 'Suítes:', value: '2 amplas suítes com persianas automáticas e integradas' },
          { label: 'Living:', value: 'Amplo living integrado com a cozinha' },
          { label: 'Lavabo:', value: '1 lavabo adicional' },
          { label: 'Sacada:', value: 'Sacada com churrasqueira' },
          { label: 'Área de Serviços:', value: 'Área de serviços separada' },
          { label: 'Garagem:', value: '2 vagas de garagem' },
          { label: 'Facilidades Adicionais:', value: 'Box de praia e portaria eletrônica' }
        ]}
        description2='Este apartamento é ideal para quem busca um refúgio próximo à praia, em um ambiente tranquilo e bem localizado. Não perca a oportunidade de adquirir um imóvel que oferece tanto conforto quanto conveniência. Agende uma visita e venha conhecer de perto todas as vantagens que este apartamento tem a oferecer.'
        mediaIdentifier='203'
      />

      <Showcase
        id='condominio'
        title="Marlim Branco"
        subtitle="Condomínio"
        description='Seu projeto moderno tem design elegante e de personalidade marcante, criando uma identidade visual única na região. O revestimento externo com pastilhas, porcelanato e pintura garantem ainda uma combinação estética que o diferencia de outras construções similares.'
        highlights={[
          { label: 'Proximidade da Praia:', value: 'Localizada a apenas 100 metros das areias douradas e águas cristalinas da Praia de Mariscal.' },
          { label: 'Medidores de água, gás e eletricidade', value: 'individuais.' },
          { label: 'Infraestrutura', value: 'para ar condicionado Split.' },
          { label: 'instalações preparadas', value: 'para cabeamento de TV e internet.' },
          { label: 'Grande capacidade', value: 'de armazenamento e reaproveitamento de água da chuva.' },
          { label: 'Todas as unidades contam com', value: 'revestimento em porcelanato, teto rebaixado em gesso e esquadrias em alumínio de alto padrão, com persianas integradas, garantindo melhores isolamentos acústico e térmico.' },
        ]}
        description2='O MARLIM BRANCO é a opção ideal para quem deseja exclusividade: são apenas nove unidades, com plantas estudadas cuidadosamente desenhadas para atender a diferentes necessidades. Elas foram planejadas para garantir não somente o melhor aproveitamento de espaço, mas também tornar cada cômodo agradável e amplo. A grande área envidraçada permite o melhor aproveitamento de luz natural, deixando o ambiente mais confortável e aconchegante.'
        style='background__primary-muted background-color-full_width'
        extra={
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.7111884648457!2d-48.50386481345502!3d-27.173911311860635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a7b03c477c35%3A0xf284a656db194bc7!2sEd.Marlin%20Branco!5e0!3m2!1sen!2sus!4v1719600988947!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        }
      />
    </main>
  );
};

export default Homepage;