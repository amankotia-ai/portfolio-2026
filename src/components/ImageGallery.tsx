function ImageGallery() {
  const images = [
    // Unifize
    '/images/Unifize%20-%20Cover.png',
    '/images/Unifize%20-%20Home%20Page.png',
    '/images/Unifize%20-%20Home%20Page-1.png',
    '/images/Unifize%20-%20Home%20Page%202.png',
    '/images/Unifize%20-%20Products.png',
    '/images/Unifize%20-%20Versus%20Page.png',
    '/images/Unifize%20-%20Success%20Stories.png',
    '/images/Unifize%20-%20Sales%20Deck.png',
    '/images/Unifize%20-%20Case%20Study%20PDF.png',

    // TrackFlow
    '/images/TrackFlow%20-%20Cover.png',
    '/images/TrackFlow%20-%20Dashboard.png',
    '/images/TrackFlow%20-%20Playbook%20Builder.png',
    '/images/TrackFlow%20-%20Node%20Drawer.png',
    '/images/TrackFlow%20-%20Analytics.png',
    '/images/TrackFlow%20-%20Templates.png',
    '/images/TrackFlow%20Templates%20-%20Website%20Hero.png',
    '/images/TrackFlow%20Templates%20-%20Preview%20Modal.png',
    '/images/TrackFlow%20-%20Use%20Cases.png',
    '/images/TrackFlow%20-%20Testimonials%20%26%20FAQs.png',

    // JSONmap
    '/images/JSONmap%20-%20Cover.png',
    '/images/JSONmap%20-%20Web%20App.png',
    '/images/JSONmap%20-%20Web%20App-1.png',
    '/images/JSONmap%20-%20API%20Modal.png',

    // 2gethr
    '/images/2gethr%20-%20Cover.png',
    '/images/2gethr%20-%20Internal%20Communication%20Design.png',
    '/images/2gethr%20-%20Member%20Application%20Interface.png',
    '/images/2gethr%20-%20Member%20Application.png',
    '/images/2gethr%20-%20Pride%20Month%20Logo.png',
    '/images/2gethr%20-%20Sales%20Collateral.png',
    '/images/2gethr%20-%20Social%20Post.png',

    // BaseStation
    '/images/BaseStation%20-%20Cover.png',
    '/images/BaseStation%20-%20Desktop%20Features.png',
    '/images/BaseStation%20-%20Desktop.png',
    '/images/BaseStation%20-%20Pitch%20Deck.png',

    // Bianhua
    '/images/Bianhua%20Cover.png',
    '/images/Bianhua%20-%20Desktop.png',
    '/images/Bianhua%20-%20Mobile.png',

    // Design Intervention
    '/images/Design%20Intervention%20-%20Cover.png',
    '/images/Design%20Intervention%20-%20Website%20Section.png',
    '/images/Design%20Intervention%20-%20Website%20Section-1.png',
    '/images/Design%20Intervention%20-%20Website%20Section-2.png',
    '/images/Design%20Intervention%20-%20Website%20Section-3.png',
    '/images/Design%20Intervention%20-%20Website%20Section-4.png',

    // Gargoyle
    '/images/Gargoyle%20-%20Cover.png',
    '/images/Gargoyle%20-%20%20Website%20Hero.png',
    '/images/Gargoyle%20-%20Website%20Section.png',
    '/images/Gargoyle%20-%20Website%20Section-1.png',
    '/images/Gargoyle%20-%20%20Illustration.png',

    // Pangea
    '/images/Pangea%20-%20Cover.png',
    '/images/Pangea%20-%20Logo%20Usage.png',
    '/images/Pangea%20-%20Services.png',
    '/images/Pangea%20-%20Pricing.png',
    '/images/Pangea%20-%20Sales%20Deck.png',
    '/images/Pangea%20-%20Sales%20Deck-1.png',
    '/images/Pangea%20-%20Social%20Post.png',

    // Poliform
    '/images/Poliform%20-%20Cover.png',
    '/images/Poliform%20-%20Logo%20%2B%20Workmark.png',
    '/images/Poliform%20-%20Banner.png',

    // Shott
    '/images/Shott%20-%20Cover.png',
    '/images/Shott%20-%20Social%20Post.png',
    '/images/Shott%20-%20Web%20App%20Integration.png',

    // St.Pauls
    '/images/St.Pauls%20-%20Cover.png',
    '/images/St.Pauls%20-%20Event%20Banner.png',
    '/images/St.Pauls%20-%20Shirt%20Sketch.png',
    '/images/St.Pauls%20-%20Old%20Boys%20Shirt.png',
    '/images/St.Pauls%20-%20Old%20Boys%20Shirt%20_%202.png',
    '/images/St.Pauls%20-%20Old%20Boys%20Shirt%20_%203.png',
    '/images/St.Pauls%20-%20Old%20Boys%20Shirt%20_%204.png',
    '/images/St.Pauls%20-%20Old%20Boys%20Shirt%20_%205.png',
    '/images/St.Pauls%20-%20Wind%20Vane.png',

    // Stallion
    '/images/Stallion%20-%20Cover.png',
    '/images/Stallion%20-%20Mobile%20Application.png',
  ];

  return (
    <div className="flex flex-col gap-1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Design work ${index + 1}`}
          className="w-full"
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default ImageGallery;
