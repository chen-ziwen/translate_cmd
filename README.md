# Terminal Translation

![Static Badge](https://img.shields.io/badge/npm-6.13.1-blue)
![Static Badge](https://img.shields.io/badge/node->=13.2.0-97CA00)
![Static Badge](https://img.shields.io/badge/licenes-MIT-97CA00)

> A simple terminal translation tool that supports multiple platforms. Through commands, you can easily switch translation platforms, set translation languages, and perform translation operations.

## Language

- [English](README.md)
- [简体中文](README_ZH.md)

## Install

```
npm install -g terminal-translate
```

## Usage

```
Usage: tl [options] [command]

Options:
  -v, --version                     Output the current version
  -h, --help                        display help for command

Commands:
  ls [langs]                        List all the translation platform. Type 'langs' at the end to see what language code can to use.
  use <name>                        Change current translation platform.
  set-translation [options] <name>  Set the appid and key for the translation platform to access the channel translation api.
    -a, --appid <appid>             Set translation platform appid.
    -s, --secret-key <secretKey>    Set translation platform secret key.
  set-langs [options]               Set source and target languages
    -s, --source <source>           Set source language
    -t, --target <target>           Set target language
  p <query...>                      Translate the text using the 'tl p <query...>' directive
  help [command]                    display help for command
```

## Example
```
$ tl set-translation baidu -a 123456 -s abcdefghijklmnopqrstuvwxyz

  Set the application ID and key of Baidu Translation Platform.

$ tl ls

  View the translation platform currently used.

$ tl ues youdao
 
 Use Youdao translation platform for translation.

$ tl ls langs
  
 View the currently available source and target language codes.

$ tl set-langs -s en -t zh

 Set the translation source language to English and the target language to Chinese.
 
$ tl p hello world

 tl p Keep up with the text that needs to be translated.
```
## Supported Platforms

- Google Translate
- Baidu Translate
- Youdao Translate
- Tencent Cloud Translate
- Alibaba Cloud Translate
- Volcengine Translate

## Apply for Tutorial

[Tutorial from Yifan](https://flowus.cn/share/0d96c879-2dba-4bfc-9d81-4b4f435398e8)

## Precautions

- The translation plug-in itself does not have the ability to translate text, but instead translates by calling the API provided by the translation platform. Currently supported platforms have free translation quotas, which is completely sufficient for most people.
- Except for Google Translate, all translation platforms need to apply for application ID and key.
- Since this plug-in runs in the terminal and there is no plan to provide a server, Google Translate needs to be used through a proxy. If it still does not work after turning on the proxy, please turn on the Tun mode of the proxy.

## Connect

- qq: 2452559902

## Contribute

Welcome to submit issues and pull requests.

## License

MIT

