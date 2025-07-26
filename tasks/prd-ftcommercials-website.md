# Product Requirements Document: F.T. Commercials LTD Website

## 1. Introduction/Overview

F.T. Commercials LTD requires a new 4-5 page professional website to showcase their HGV and commercial vehicle repair and maintenance services. The website will serve as the primary digital presence for the company, displaying their comprehensive workshop services, fleet capabilities, and providing multiple contact methods including a comprehensive contact form.

**Goal:** Create a modern, professional website that educates visitors about F.T. Commercials' repair and maintenance services and facilitates customer contact and service requests.

## 2. Goals

- **Primary Goal:** Increase customer inquiries and service requests through improved online presence
- **Secondary Goals:**
  - Establish professional credibility in the commercial vehicle repair industry
  - Improve local SEO visibility for HGV repairs and maintenance in Newark area
  - Reduce repetitive phone inquiries by providing comprehensive service information
  - Showcase workshop capabilities and company expertise
  - Improve search ranking for commercial vehicle services

## 3. User Stories

**As a fleet manager:**

- I want to learn about F.T. Commercials' repair services so I can determine if they meet my fleet's maintenance needs
- I want to see their workshop capabilities so I can understand what types of vehicles they can service
- I want to easily contact them so I can get a quote for my fleet maintenance needs
- I want to see examples of their work so I can trust their capabilities

**As an HGV driver:**

- I want to quickly find contact information so I can reach them for emergency repairs
- I want to submit service requests online so I can provide detailed vehicle information
- I want to see their full range of services so I can use them for different repair needs

**As a business owner:**

- I want to understand their PMI and MOT services so I can ensure my vehicles remain compliant
- I want to see their electrical diagnostic capabilities so I can trust them with complex issues
- I want to know their opening hours and location so I can plan service visits

**As a mobile user:**

- I want the website to work seamlessly on my phone so I can access it anywhere
- I want fast loading times so I can get information quickly, especially for emergency situations

## 4. Functional Requirements

### Page Structure Requirements:

1. **Home Page:** Hero section with company images, brief overview, and call-to-action buttons
2. **Services Page:** Detailed breakdown of repair services (PMIs, electrical diagnostics, MOT inspections, welding & fabrication, tail lift repairs, spray painting, body work repairs)
3. **Fleet Page:** Display of workshop capabilities and equipment (5-bay workshop, inground brake rollers, loading trailers, 1-acre site with 20-30 vehicle parking)
4. **About Page:** Company information, experience, and values
5. **Contact Page:** Contact details, location, and comprehensive contact form

### Core Functionality Requirements:

6. **Contact Form:** Must collect name, email, phone, message, with optional service type and vehicle details
7. **Service Request/Quote Form:** Detailed form for customers to request quotes
8. **Gallery Section:** Display workshop facilities and past jobs (placeholder images initially)
9. **Customer Testimonials:** Section for customer reviews (include the provided testimonial)
10. **Mobile Responsiveness:** Website must work perfectly on all device sizes, prioritizing mobile
11. **Fast Loading:** Optimized images and code for quick page load times
12. **SEO Optimization:** Local SEO friendly with proper meta tags and structure

### Design Requirements:

13. **Color Scheme:** Light grey primary, with black and orange highlights
14. **Visual Style:** Professional/corporate combined with modern/dynamic elements
15. **Logo:** Use the provided logo from temp-files directory
16. **Typography:** Clean, readable fonts suitable for professional services
17. **Navigation:** Clear, intuitive navigation between all pages

### Contact Information Display:

18. **Location:** Ollerton Road, Newark, United Kingdom prominently displayed
19. **Phone:** 01777 871493 and 07967 176567 clickable for mobile users
20. **Email:** ftcommercials@gmail.com as clickable mailto link
21. **Website:** ftcommercialslimited.com displayed as company URL
22. **Opening Hours:** 7am - 5pm displayed prominently

## 5. Non-Goals (Out of Scope)

- **Online Booking System:** No real-time booking or scheduling functionality
- **Payment Processing:** No online payment or invoicing system
- **Customer Portal:** No login/account management for customers
- **Real-time Tracking:** No GPS or vehicle tracking features
- **Multi-language Support:** English only for initial version
- **Blog/News Section:** No content management system required
- **Social Media Integration:** Basic links only, no feed integration
- **Advanced Features:** No features beyond the L.W. Barker template site

## 6. Design Considerations

### Visual Design:

- Use the provided logo from temp-files directory
- Incorporate company building images from temp-files directory
- Implement light grey, black, and orange color scheme throughout
- Modern typography with good readability
- Professional imagery style for commercial vehicle repair industry

### UI/UX Requirements:

- Intuitive navigation with clear page hierarchy
- Call-to-action buttons strategically placed
- Mobile-first responsive design
- Fast loading with optimized images
- Accessible design following WCAG guidelines
- Contact information easily accessible from every page

## 7. Technical Considerations

### Framework & Technology:

- **Frontend:** React.js with Next.js for SEO benefits
- **Styling:** TailwindCSS for modern, responsive design
- **Deployment:** Vercel for fast, reliable hosting
- **Development:** Must work on localhost:3000 during development

### Performance Requirements:

- Page load time under 3 seconds
- Mobile-optimized images
- SEO-friendly URLs and meta tags
- Proper heading structure (H1, H2, H3)
- Vercel Analytics integration

### Accessibility Features:

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios for text
- Descriptive alt text for images

## 8. Success Metrics

### Primary Metrics:

- **Improve Search Ranking:** Target improved local SEO ranking for "HGV repairs Newark" and "commercial vehicle maintenance"
- **Increase in Contact Form Submissions:** Target 50% increase within 3 months
- **Phone Inquiries:** Maintain or increase current inquiry levels
- **Page Views:** Track engagement across all pages

### Secondary Metrics:

- **Local SEO Ranking:** Improve ranking for "commercial vehicle repairs Newark"
- **Time on Site:** Increase average session duration
- **Contact Information Clicks:** Track phone and email clicks
- **Service Page Engagement:** Monitor Services and Fleet page visits

## 9. Content Requirements

### Company Information to Include:

- **Workshop Details:** 5-bay fully equipped HGV commercial workshop
- **Equipment:** Newly installed inground brake rollers for Traffic Commissioners Guidelines compliance
- **Loading Capabilities:** Option of loading trailers for loaded brake tests
- **Site Information:** 1-acre site with parking for 20-30 vehicles
- **Opening Hours:** 7am - 5pm
- **Services:** PMIs, Electrical Diagnostic Investigation, Pre MOT inspections, Welding & fabrication, Tail lift repairs, Spray painting, Body work repairs

### Testimonial to Include:

- The provided testimonial about the driver who was helped within 25 minutes when stranded 2 hours from home

### Placeholder Content Needed:

- **Gallery Images:** Workshop facilities, equipment, and past work examples
- **Additional Testimonials:** More customer reviews and feedback
- **Team Information:** Staff bios and qualifications
- **Certifications:** Any industry certifications or accreditations
- **Service Area:** Geographic coverage details

## 10. Open Questions

### Content Questions:

- **Additional Testimonials:** Do you have more customer testimonials to include, or should we create placeholder structure?
- **Gallery Images:** Are there specific workshop photos or job photos you'd like to feature?
- **Service Pricing:** Should pricing information be included or "Contact for Quote" approach?
- **Team Information:** Should we include information about key staff members?

### Technical Questions:

- **Domain Setup:** Will ftcommercialslimited.com be pointed to the new site immediately?
- **Email Integration:** Should contact forms send to ftcommercials@gmail.com or a different address?
- **Analytics:** Should we set up Vercel Analytics or do you have other tracking preferences?

### Additional Features:

- **Emergency Contact:** Should the mobile number be highlighted as emergency contact?
- **Service Area:** Should we specify geographic service areas beyond Newark?
- **Certifications:** Do you have any industry certifications to display?

---

**Next Steps:**

1. Review and approve this PRD
2. Gather any additional content (workshop photos, team information, detailed service descriptions)
3. Begin development with focus on core functionality first
4. Implement responsive design and SEO optimization
5. Test across devices and browsers before deployment
