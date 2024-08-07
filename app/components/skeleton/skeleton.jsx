import { cssProps, numToMs } from '~/utils/style';
import style from './skeleton.module.css';

export function Skeleton({ width, height, ...props }) {
  return (
    <div
      className={style.skeleton}
      style={cssProps(styleSheet(width, height, props.delay))}
      {...props}
    />
  );
}

function styleSheet(width, height, delay) {
  return {
    delay: numToMs(delay),
    style: {
      width: `${width}px`,
      height: `${height}px`,
    },
  };
}
