import { useEffect, useRef, useState } from 'react';
import gamestackTexture2Large from '~/assets/new/deros.png1600x2560.png';
import gamestackTexture2Placeholder from '~/assets/new/deros.png20x32.png';
import gamestackTexture2 from '~/assets/new/deros.png800x1280.png';
import eventCredentialsLarge from '~/assets/new/event_credentials.png__1320x520.png';
import eventCredentials from '~/assets/new/event_credentials.png__660x260.png';
import eventCredentialsPlaceholder from '~/assets/new/event_credentials.png_placeholder_33x13.png';
import pontoSimTextureLarge from '~/assets/new/pontosim02.png1600x2560.png';
import pontoSimTexturePlaceholder from '~/assets/new/pontosim02.png20x32.png';
import pontoSimTexture from '~/assets/new/pontosim02.png800x1280.png';

import eventCredentials2 from '~/assets/new/event_credentials2.png__660x260.png';
import eventCredentialsLarge2 from '~/assets/new/event_credentials2.png_large_1320x520.png';
import eventCredentialsPlaceholder2 from '~/assets/new/event_credentials2.png_placeholder_33x13.png';

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
        title="electronic timekeeping control"
        description="Development of a Electron app for timekeeping control. The app is build in Spring Boot and bootstrap. 
        The app is used to control the timekeeping of the employees of the company."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
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
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Service control"
        description="Development of a web app for service control. It is used to control the it services of the company like the servers, the computers, the network and the services. "
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'deros app',
          textures: [
            {
              srcSet: `${gamestackTexture2} 800w , ${gamestackTexture2Large} 1920w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${pontoSimTexture} 800w, ${pontoSimTextureLarge} 1920w`,
              placeholder: pontoSimTexturePlaceholder,
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
