import { Context } from 'koa';

export default {
  async register(ctx: Context) {
    const { usertype, ...body } = ctx.request.body;

    const plugin = strapi.plugin('users-permissions');
    console.log('plugin', plugin);
    const settings = await plugin.service('users-permissions').getAdvancedSettings();
    const { email, username, password } = body;

    if (!email || !username || !password) {
      return ctx.badRequest('Missing required fields');
    }

    const user = await plugin.service('user').add({
      ...body,
      usertype,
      confirmed: !settings.email_confirmation,
    });

    ctx.body = {
      user,
    };
  },
};
