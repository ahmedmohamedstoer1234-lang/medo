export type Project = { id:string; title:string; subtitle:string; description:string; stack:string[]; liveUrl:string; githubUrl:string; imageUrl:string; date:string };
export type Service = { id:string; title:string; description:string; features:string[]; price:string; icon:string; ctaLink:string };
export type Testimonial = { id:string; name:string; company:string; rating:number; text:string; avatarUrl:string; featured:boolean };
export type SocialLink = { id:string; label:string; url:string; icon:string };
export type Profile = { name:string; title:string; location:string; email:string; phone:string; heroTitle:string; heroLead:string; rotatingWords:string[]; bio:string; cvUrl:string; password:string; };
export type SiteData = { profile:Profile; projects:Project[]; services:Service[]; testimonials:Testimonial[]; links:SocialLink[] };
