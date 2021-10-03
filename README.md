# yandex-serverless-graphql
A small Helix GraphQL lambda, configured to run on Yandex Cloud - GraphiQL included

## What's used

1. [Helix GraphQL](https://github.com/contrawork/graphql-helix)
2. [Yandex Cloud Serverless framework plugin](https://github.com/yandex-cloud/serverless-plugin)
3. [Serverless framework](https://github.com/serverless/serverless)

## How do I access GraphiQL?

Go to https://\<function\>?type=iql

E.g, https://functions.yandexcloud.net/d4e5at1u2i343ad3dtms?type=iql

Demo Query:
```
{
  test
}
```
