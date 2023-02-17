import PaintingList from './PaintingList';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PaintingList items={recipes} />
    </div>
  );
};
