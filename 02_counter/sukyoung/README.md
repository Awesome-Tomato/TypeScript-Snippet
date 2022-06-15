# Counter

## Install

```
npx create-react-app sukyoung --template typescript // install
npm start // project starts
```

```
// App.tsx
const ButtonDecrease: React.FC<{handleDecrease: () => void}> = ({handleDecrease}) => {

  return (
    <Button onClick={handleDecrease}>
      Decrease
    </Button>
  );
}
```

## Reference

- [React Typescript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/)
