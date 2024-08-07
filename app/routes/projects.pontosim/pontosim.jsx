import { Fragment } from 'react';
import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';

import pontosimBackground from '~/assets/new/projects/pontosim/pontosim_background.png';
import pontoSimApp from '~/assets/new/projects/pontosim/pontosim_app_image.png';
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

const title = 'Timekeeping system';
const description =
  'Timekeeping system created to record the entry and exit of employees, monitor hours worked, and generate reports to facilitate salary calculation and benefits administration.';
const roles = ['Employee attendance control', 'Location validation', 'Reporting', 'Decentralized management'];

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
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Purposes</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>Efficiency: Automate and simplify the time recording process, reducing errors and saving time.</li>
                  <li>Compliance: Ensure compliance with labor laws and internal company policies.</li>
                  <li>Transparency: Provide clear visibility into hours worked, promoting fairness and trust between employees and employers.</li>
                  <li>Management: Improve control and management of human resources through accurate, real-time data.</li>
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
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
              Purposes:
Efficiency: Automate and simplify the time recording process, reducing errors and saving time.
Compliance: Ensure compliance with labor laws and internal company policies.
Transparency: Provide clear visibility into hours worked, promoting fairness and trust between employees and employers.
Management: Improve control and management of human resources through accurate, real-time data.
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
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Previous Problems Faced:</ProjectSectionHeading>
              <ProjectSectionText>             

Inconsistencies and Fraud: Manual or mechanical methods were susceptible to fraud and inconsistencies, such as erroneous records or clocking by third parties.
Data Loss: Undigitized physical documents or records were easily lost or damaged, resulting in a lack of historical data.
Complexity in Management: Manual administration of schedules, shifts and payroll calculations was complex and prone to errors. Furthermore, it was difficult to establish more comprehensive control in terms of location, aiming for its use in several locations.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Real-time collaborative annotation facilitated better collaboration
                between learners, and was much easier to run group exercises with the new
                shared layers feature. Learners gave feedback that is was enjoyable to
                work together and see what others were doing, and liked how interactive
                and easy to use the application was.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
