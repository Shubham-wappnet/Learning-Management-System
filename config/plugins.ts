export default ({ env }: { env: any }) => ({
  'users-permissions': {
    config: {
      register: {
        allowedFields: ['usertype'],
      },
    },
  },
});
