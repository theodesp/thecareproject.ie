import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What is your contact email?',
    content: () => (
      <>
        You can email us at thecareprojectireland@gmail.com 
      </>
    ),
  },
  
{
    title: 'What can go into the care packages?',
    content: () => (
      <>
        Socks, gloves, tissues, soft foods (such as custard packs), crackers, bottled water, books,
        flashlight/head lamp(s), writing tools such as a pen/pencil/paper, bananas, band aids, tea bags, 
        instant coffee, cups, plastic spoons, deodorant (fragrance free), hand cream, vaseline, dried fruit,
        wet wipes, etc. 
      </>
    ),
  },
  {
    title: 'When are care packages given out?',
    content: () => (
      <>
        Care packages are given out 4-6 times a year in inner city Limerick. Times are usually in the 
        afternoon, and they are handed out individually. Our bags have our logo on them so they can be 
        recognised. We feel that this will bring, as well as build awareness. 
      </>
    ),
  },
  {
    title: 'How can I donate, and where?',
    content: () => (
      <>
        The Care Project will only accept sealed items, along with the receipt of purchase, which contains 
        the specific purchase value of those items. We are not receiving any vouchers, money, or clothing at the 
        moment. Whatever you donate will be checked, placed into an accounting inventory of donations, and what 
        cannot be included in a pack will be returned immediately. Food goods will be accepted within 1 month of 
        purchase. Items that may endanger the individuals receiving the packages, such as nail clippers, razors, 
        plastic knives, (see list below), will not be accepted. 

        You can email us at thecareprojectireland@gmail.com to arrange pick up at a point in Limerick city. 
      </>
    ),
  },
  {
    title: 'Do you get governmental, charity or council funds?',
    content: () => (
      <>
        No. The Care Project is funded personally at the moment. 
      </>
    ),
  },
  {
    title: 'Are you affiliated with a charity, and/or a religious group?',
    content: () => (
      <>
        No.
      </>
    ),
  },
  {
    title: 'What items are NOT included in the packages?',
    content: () => (
      <>
        First of all, money in any form- cash, cheques, coupons, gift cards etc. 
        
        Generally the items that will NOT be included in the care packages are the ones that have a 
        high probability, within the realms of clear and obvious logic, to cause harm to individuals that will 
        receive the package. These include for example: razors, nail clippers, knives, glass items, sharp plastics, 
        alcohol hand sanitizers, alcohol based drinks/chocolates/candy, energy drinks, tobacco, any hemp products 
        (even hand cream), over the counter medication(s), cleaners/sanitizer wipes (apart from Milton), scissors, 
        tweezers, safety pins etc. This list is ongoing, and it is up to The Care Project to assess each new item. 

        If you have any questions as to can, and is included, and what you can donate, please use the contact form 
        to get in touch. 
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
