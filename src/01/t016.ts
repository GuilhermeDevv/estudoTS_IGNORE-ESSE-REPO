//structural typing

type User = { username: string; password: string };
type verifyUser = (user: User, sentUser: User) => boolean;

const isLog: verifyUser = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};
const userBDD = { username: 'gl', password: '123' };
const user = { username: 'gl1', password: '123' };

const resultlogin = isLog(user, userBDD);
console.log(resultlogin);
