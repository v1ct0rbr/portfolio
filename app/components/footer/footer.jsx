import { Text } from '~/components/text';
import config from '~/config.json';
import { classes } from '~/utils/style';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
    </Text>
  </footer>
);
