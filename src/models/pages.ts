export default (sequelize: any, Datatype: any) => {
  const user = sequelize.define('user', {
    id: {
      type: Datatype.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    page: {
      type: Datatype.STRING(1000),
      required: true,
    },
  });
  return user;
};
