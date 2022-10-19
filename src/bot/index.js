const { Telegraf } = require('telegraf');
const { t } = require("../../templates");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {

    const lang = ctx.message?.from?.language_code

    await ctx.replyWithMarkdown(t('stub', lang === 'ru' ? 'ru' : 'en' ),
        { disable_web_page_preview: true  }
    )

    await next()
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
