import { Fragment } from 'react';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';

import pontoSimApp from '~/assets/new/projects/pontosim/pontosim_app_image.png';
import pontosimBackground from '~/assets/new/projects/pontosim/pontosim_background.png';
import pontoSimMobile01 from '~/assets/new/projects/pontosim/pontosim_mobile_image_analogico.png';
import pontoSimMobile02 from '~/assets/new/projects/pontosim/pontosim_mobile_image_digital.png';

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
import styles from './pontosim.module.css';


const title = 'Sistema de ponto eletrônico';
const description =
  'Com uma interface intuitiva, o sistema facilita a marcação de entradas e saídas, automatiza cálculos de horas trabalhadas, \
  e gera relatórios detalhados para a gestão. Além disso, oferece integração com outros sistemas de RH, suporte a múltiplos dispositivos,\
   e funcionalidades avançadas como a geolocalização e o reconhecimento facial, garantindo segurança e conformidade com as regulamentações trabalhistas.';
const roles = [
  'Employee attendance control',
  'Location validation',
  'Reporting',
  'Decentralized management',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PontoSim = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${pontosimBackground} 1280w, ${pontosimBackground} 2560w`}
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
              srcSet={`${pontoSimApp} 800w, ${pontosimBackground} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Sistema de ponto eletrônico"
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
                    {/* Efficiency: Automate and simplify the time recording process, reducing
                    errors and saving time. */}
                    Eficiência: Automatizar e simplificar o processo de registro de ponto,
                    reduzindo erros e economizando tempo.
                  </li>
                  <li>
                    {/* Compliance: Ensure compliance with labor laws and internal company
                    policies. */}
                    Conformidade: Garantir a conformidade com as leis trabalhistas e
                    políticas internas da empresa.
                  </li>
                  <li>
                    {/* Transparency: Provide clear visibility into hours worked, promoting
                    fairness and trust between employees and employers. */}
                    Transparência: Fornecer visibilidade clara das horas trabalhadas,
                    promovendo justiça e confiança entre funcionários e empregadores.
                  </li>
                  <li>
                    {/* Management: Improve control and management of human resources through
                    accurate, real-time data. */}
                    Gestão: Melhorar o controle e a gestão de recursos humanos por meio de
                    dados precisos e em tempo real.
                  </li>
                </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${pontoSimMobile01} 350w, ${pontoSimMobile01} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${pontoSimMobile02} 350w, ${pontoSimMobile02} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Problemas Anteriores Enfrentados:
              </ProjectSectionHeading>
              <ProjectSectionText>
                Inconsistências e Fraudes: Métodos manuais ou mecânicos eram suscetíveis a
                fraudes e inconsistências, como registros errôneos ou marcações de ponto
                por terceiros. Perda de Dados: Documentos físicos ou registros não
                digitalizados eram facilmente perdidos ou danificados, resultando em falta
                de dados históricos. Complexidade na Gestão: A administração manual de
                horários, turnos e cálculos de folha de pagamento era complexa e propensa
                a erros. Falta de Conformidade: Dificuldades em garantir que todos os
                registros de ponto estivessem em conformidade com a legislação trabalhista
                vigente.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${pontoSimApp2} 800w, ${pontoSimApp2} 1920w`}
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
