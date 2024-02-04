import { aboutUsCardData } from '../../data/aboutUsCardData';
import { AboutUsCard } from '../AboutUsCard/AboutUsCard';
import { List } from './AboutUsCardList.styled';

export const AboutUsCardList = () => {
  return (
    <List>
      {aboutUsCardData.map(data => {
        return (
          <li key={data.title}>
            <AboutUsCard title={data.title} text={data.description} color={data.color} />
          </li>
        );
      })}
    </List>
  );
};
