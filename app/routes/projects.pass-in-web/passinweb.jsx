import { Fragment } from 'react';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';

/* import pontoSimApp from '~/assets/new/projects/pontosim/pontosim_app_image.png';
import pontosimBackground from '~/assets/new/projects/pontosim/pontosim_background.png';
import pontoSimMobile01 from '~/assets/new/projects/pontosim/pontosim_mobile_image_analogico.png';
import pontoSimMobile02 from '~/assets/new/projects/pontosim/pontosim_mobile_image_digital.png'; */

import passInWebApp from '~/assets/new/projects/pass-in-web/img02.png';
import passInWebAppCheckin from '~/assets/new/projects/pass-in-web/img03.png';
import passInWebBackground from '~/assets/new/projects/pass-in-web/img02.png';
import passInWebMobile01 from '~/assets/new/projects/pass-in-web/app02.png';
import passInWebMobile02 from '~/assets/new/projects/pass-in-web/app01.png';

import pontoSimApp2 from '~/assets/new/projects/pontosim/pontosim_app_image2.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './passinweb.module.css';


const title = 'Sistema de controle de credenciamento';
const description =' Com uma interface intuitiva, o sistema permite o controle de acesso a eventos com o cadastro e check-in de participantes ';



const roles = [
  'Cadastro e crachá virtual',
  'Chegada com check-in',
  'Listagem e execlusão de participantes',
  'Listagem paginada',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PassInWeb = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${passInWebBackground} 1280w, ${passInWebBackground} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${passInWebApp} 800w, ${passInWebApp} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Sistema de controle de credenciamento"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Propósito</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    Facilitar o controle de acesso a eventos, com um sistema de credenciamento
                  </li>
                  <li>
                    Permitir o cadastro de participantes e a emissão de crachás virtuais
                  </li>
                  <li>
                    Realizar o check-in de participantes, com listagem e exclusão de participantes
                  </li>
                  <li>
                    Listagem paginada de participantes, com busca e filtros
                  </li>


                 
                </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
             
              <Image
                className={styles.sidebarImage}
                srcSet={`${passInWebMobile02} 350w, ${passInWebMobile02} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
               <Image
                className={styles.sidebarImage}
                srcSet={`${passInWebMobile01} 350w, ${passInWebMobile01} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                  Tecnologias
              </ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>React</li>
                  <li>React Native para produção de apps</li>
                  <li>Node.js</li>
                  <li>Fastify</li>
                  <li>Shadcn</li>
                  <li>Taiwind Css</li>
                  
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${passInWebAppCheckin} 800w, ${passInWebAppCheckin} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
           
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
