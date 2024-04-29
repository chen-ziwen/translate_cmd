#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");
const { onList, onUse, onSetTranslation } = require("../util/actions");
const { getPlatformList } = require("../util/helpers");

const program = new commander.Command();

program.version(pkg.version, '-v, --version', 'Output the current version');

program
    .command("ls")
    .description("List all the translation platform")
    .action(onList);

program
    .command("use <name>")
    .description("Change current translation platform")
    .action(onUse);

program
    .command("set-translation <name>")
    .option("-a, --appid <appid>", "Set translation platform appid")
    .requiredOption("-s, --secret-key <secretKey>", "Set translation platform secret key")
    .description("Set the appid and key for the translation platform to access the channel translation api")
    .action(onSetTranslation);

program.parse(process.argv);




