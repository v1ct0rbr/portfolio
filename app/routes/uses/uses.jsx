import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to code and deploy stuff. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cloud</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://coolify.io/">Coolify</Link> - Coolify is an all-in
                    one PaaS that helps you to self-host your own applications, databases
                    or services (like Wordpress, Plausible Analytics, Ghost) without
                    managing your servers, also known as an open-source & self-hostable
                    Heroku / Netlify / Vercel alternative.
                  </ListItem>
                  <ListItem>
                    <Link href="https://aws.amazon.com/">AWS</Link> - I use AWS for
                    hosting static sites, serverless functions, and databases. It’s a bit
                    of a beast but it’s hard to beat in terms of features and reliability.
                  </ListItem>
                  <ListItem>
                    <Link href="https://hostiger.com.br">Hostinger</Link> - I use
                    Hostinger for hosting moderate traffic websites. It&apos;s a great
                    cost-benefit.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VsCode</Link> as my
                    main code editor. It’s fast, extensible, and has a great ecosystem of
                    plugins. I use the{' '}
                    <Link href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons">
                      VSCode Icons
                    </Link>{' '}
                    and{' '}
                    <Link href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">
                      Material Icon Theme
                    </Link>{' '}
                    to make it look pretty.
                  </ListItem>
                  <ListItem>
                    Chrome is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For back end development I user Java with Spring Boot. I also have
                    experience with Node.js and PHP.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, tailwind and ShadCN.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> is my go-to for
                    containerization. I use it for local development and deployment.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.postman.com/">Postman</Link> is my API client
                    of choice. It’s great for testing and debugging APIs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://git-scm.com/">Git</Link> is my version control
                    system of choice. I use it for all my projects.
                  </ListItem>

                  <ListItem>
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link> is my SQL
                    database of choice. It’s powerful and reliable.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.mysql.com/">MySQL</Link> is my SQL database of
                    choice. It’s powerful and reliable.
                  </ListItem>
                  <ListItem>
                    <Link href="https://mariadb.org/">MariaDB</Link> is my SQL database of
                    choice. It’s powerful and reliable.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Notebook</TableHeadCell>
                    <TableCell>Helios Predator 300</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Ubuntu Desktop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>RedDragon Deimos k599</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Delux m618d</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>OneOdio A30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Fifine T732</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
