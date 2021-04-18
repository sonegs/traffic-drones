// Print the company section
const company = () => {
    const company = document.createElement('div');
    company.classList.add('company');

    //logo
    const logo = document.createElement('div');
    logo.classList.add('logo-company');
    company.appendChild(logo);

    //company-name
    const companyName = document.createElement('div');
    companyName.classList.add('name-company');
    companyName.textContent = 'Logoipsum';
    company.appendChild(companyName);

    //text-company
    const textCompany = document.createElement('div');
    textCompany.classList.add('text-company');
    textCompany.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';
    company.appendChild(textCompany);

    return company;
};


// Print the Departments section
const departments = () => {

    //departments
    const departments = document.createElement('div');
    departments.classList.add('departments');

    departments.appendChild(services());
    departments.appendChild(about());
    departments.appendChild(followUs());
    return departments;
};

// Print the Services section inside Departments

const services = () => {

    //departments //services

    const services = document.createElement('div');
    services.classList.add('services-list');

    //departments //services //services-title

    const servicesTitle = document.createElement('div');
    servicesTitle.classList.add('services-title');
    servicesTitle.textContent = 'Services';

    //departments //services //services-email-marketing

    const servicesEmailMarketing = document.createElement('div');
    servicesEmailMarketing.classList.add('services-item');
    servicesEmailMarketing.textContent = 'Email Marketing';

    //departments //services //services-campaigns

    const servicesCampaigns = document.createElement('div');
    servicesCampaigns.classList.add('services-item');
    servicesCampaigns.textContent = 'Campaigns';

    services.appendChild(servicesTitle);
    services.appendChild(servicesEmailMarketing);
    services.appendChild(servicesCampaigns);
    return services;
};


// Print the About section inside Departments
const about = () => {

    //departments //about
    const about = document.createElement('div');
    about.classList.add('about-list');

    //departments //about-us //about-us-title

    const aboutTitle = document.createElement('div');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = 'About';

    //departments //about-us //about-us-our-story

    const aboutOurStory = document.createElement('div');
    aboutOurStory.classList.add('about-item');
    aboutOurStory.textContent = 'Our Story';

    //departments //about-us //about-us-benefits

    const aboutBenefits = document.createElement('div');
    aboutBenefits.classList.add('about-item');
    aboutBenefits.textContent = 'Benefits';

    about.appendChild(aboutTitle);
    about.appendChild(aboutOurStory);
    about.appendChild(aboutBenefits);

    return about;
};

// Print the Follow Us section inside Departments

const followUs = () => {

    //departments //follow-us
    const followUs = document.createElement('div');
    followUs.classList.add('follow-us-list');

    //departments //follow-us //follow-us-title

    const followUsTitle = document.createElement('div');
    followUsTitle.classList.add('follow-us-title');
    followUsTitle.textContent = 'Follow Us';

    //departments //follow-us //follow-us-row 

    const followUsRow = document.createElement('div');
    followUsRow.classList.add('follow-us-row');

    //departments //follow-us //follow-us-row //follow-us-facebook

    const followUsFacebook = document.createElement('div');
    followUsFacebook.classList.add('follow-us-item');

    //departments //follow-us //follow-us-row //follow-us-twitter

    const followUsTwitter = document.createElement('div');
    followUsTwitter.classList.add('follow-us-item');

    //departments //follow-us //follow-us-row //follow-us-instagram

    const followUsInstagram = document.createElement('div');
    followUsInstagram.classList.add('follow-us-item');

    followUs.appendChild(followUsTitle);
    followUs.appendChild(followUsRow);
    followUsRow.appendChild(followUsFacebook);
    followUsRow.appendChild(followUsTwitter);
    followUsRow.appendChild(followUsInstagram);

    return followUs;
};


// Print the Copyright Section

const copyright = () => {

    // Copyright

    const copyright = document.createElement('div');
    copyright.classList.add('copyright');
    copyright.textContent = 'Copyright © 2020. LogoIpsum. All rights reserved.';
    return copyright;
}

// Export the Footer Section
export const footer = () => {
    const footer = document.createElement('footer');

    footer.appendChild(company());
    footer.appendChild(departments());
    footer.appendChild(copyright());

    document.body.appendChild(footer);
};