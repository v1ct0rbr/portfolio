import { useEffect, useRef, useState } from 'react';
import derosTextureLarge from '~/assets/new/deros.png1600x2560.png';
import derosTexturePlaceholder from '~/assets/new/deros.png20x32.png';
import derosTexture from '~/assets/new/deros.png800x1280.png';
import eventCredentialsLarge from '~/assets/new/event_credentials.png__1320x520.png';
import eventCredentials from '~/assets/new/event_credentials.png__660x260.png';
import eventCredentialsPlaceholder from '~/assets/new/event_credentials.png_placeholder_33x13.png';
import pontoSimTextureLarge from '~/assets/new/projects/pontosim/pontosim02.png1600x2560.png';
import pontoSimTexturePlaceholder from '~/assets/new/projects/pontosim/pontosim02.png20x32.png';
import pontoSimTexture from '~/assets/new/projects/pontosim/pontosim02.png800x1280.png';

import eventCredentials2 from '~/assets/new/event_credentials2.png__660x260.png';
import eventCredentialsLarge2 from '~/assets/new/event_credentials2.png_large_1320x520.png';
import eventCredentialsPlaceholder2 from '~/assets/new/event_credentials2.png_placeholder_33x13.png';

import licenceManagerTexture from '~/assets/new/vqlicencemanager_1280x800.png';
import licenceManagerTextureLarge from '~/assets/new/vqlicencemanager_2560x1600.png';
import licenceManagerTexturePlaceholder from '~/assets/new/vqlicencemanager_32x20.png';

import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Cloud Especialist + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Sistema de ponto Eletrônico"
        // description="Development of a Electron app for timekeeping control. The app is build in Spring Boot and bootstrap.
        // The app is used to control the timekeeping of the employees of the company."
        description="Desenvolvimento de um aplicativo Electron para controle de ponto eletrônico. O aplicativo é construído em Spring Boot e bootstrap. 
        O aplicativo é usado para controlar o ponto dos funcionários da empresa."
        buttonText="View project"
        buttonLink="/projects/pontosim"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',

          textures: [
            {
              srcSet: `${pontoSimTexture} 1280w, ${pontoSimTextureLarge} 2560w`,
              placeholder: pontoSimTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Event credentials"
        description="Development of a web app for event credentials. It is used to control the credentials of the event. "
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'phone',
          alt: 'Smart Sparrow lesson builder',

          textures: [
            {
              srcSet: `${eventCredentials} 260w, ${eventCredentialsLarge} 520w`,
              placeholder: eventCredentialsPlaceholder,
            },
            {
              srcSet: `${eventCredentials2} 260w, ${eventCredentialsLarge2} 520w`,
              placeholder: eventCredentialsPlaceholder2,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="IT Service control"
        description="Development of a web app for service control. It is used to control the it services of the company like the servers, the computers, the network and the services. "
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'deros app',
          textures: [
            {
              srcSet: `${derosTexture} 800w , ${derosTextureLarge} 1920w`,
              placeholder: derosTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Licence manager"
        description="Development of a web app for licence manager. It is used to control the licences of software of the company. "
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Licence manager',
          textures: [
            {
              srcSet: `${licenceManagerTexture} 800w, ${licenceManagerTextureLarge} 1920w`,
              placeholder: licenceManagerTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
