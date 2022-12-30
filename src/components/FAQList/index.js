import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Create raw input (info of each of the features)
const FAQList = [
  {
    question: 'Is the MoLöwe for rent?',
    answer:
      'Currently the MoLöwe is not a service provided from Leuphana in this sense, instead it is an infrastructure that is used in the context of research projects and teaching. Therefore, events in the MoLöwe are part of research projects or project seminars. As a partner in a research project, your are involved in the design of the workshop from the start.',
  },
  {
    question: 'What software does the MoLöwe use?',
    answer:
      'The software for this interactive browser based dashboard was custom developed for the MoLöwe. Backend and fronted development are based on expandable frameworks with open standards. For example, for interactive graphs the software uses plotly, a provider of online data analytics and visualisation tools, and for interactive maps mapbox, a provider for custom online maps. To control these interactive data visualisation control elements, such as switches and dropdown lists, were developed for the MoLöwe.',
  },
  {
    question: 'How do I access the MoLöwe software?',
    answer:
    <p> You can access the MoLöwe software
        <a href="https://moloewe.leuphana.de/login"> here.</a>
    </p>,
  },
  {
    question: 'How mobile is the MoLöwe?',
    answer:
      'The entire hardware set-up can be packed into rollable boxes and set up again on location. The prerequisites are a barrier-free access (the MoLöwe cannot climb stairs), internet and power access. It is only designed for indoors. The MoLöwe is modular and can therefore be scaled as needed in the number and size of screens. For the complete set-up including five 65’’ screens the MoLöwe fits into a 3.5t van.',
  },
  {
    question: 'What is the target group of the MoLöwe?',
    answer:
      'Depending on the research question projects in the MoLöwes addresses all kinds of target groups. Workshop participants can be employees of the city administration or a private company, or scientists, policymakers, but also pupils. Contents of the MoLöwe can be adapted to any topic or target group.',
  },
  {
    question: 'How much time do I have to invest as a workshop participant?',
    answer:
      'A project in the MoLöwe consist of at least two events. For the first event, preliminary models and options for solutions will be presented by the researchers and discussed and further developed with participants. Based on this feedback, researchers then prepare the next event, which focuses on the implementation strategies for discussed options. Depending on the topic one event can take half a day or 1 to 2 days.',
  },
];

// Map all features onto the homepage
export default function PrintFAQ() {
  return (
    <div>
      {FAQList.map((FAQ) => {
        return (
            <div className={styles.container}>
                <details>
                  <summary> {FAQ.question} </summary>
                  <div> {FAQ.answer} </div>
                </details>
            </div>
        );
      })}
    </div>
  );
}

