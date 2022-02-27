---
title: PowerShellでGatsby用の記事テンプレートを作成する
date: "2022-02-27T21:33:53+09"
image: "220227_powershell_blog/image.png"
thumbnail: "../noThumb.jpg"
tags: ["Software"]
---

Gatsbyのブログがわりと体に馴染んできて、サクッとブログを作れるようにしたかったので、テンプレから記事を作成するPowershellのスクリプトを書きました。

こういう場面は何かとある気がするので、備忘録的にメモ。

## 引数と日付から保存先のディレクトリ名を決める

`createNewBlog.ps1 newArticle`みたいにして、記事のフォルダとテンプレートのマークダウンを生成してほしいので、まずはフォルダを作ります。日時については`Get-Date -Format`でフォーマット指定した日付を出力できるようです。`-UFormat`だとUNIX形式で指定できます。

```powershell
#今日の日付
$TODAY = Get-Date -Format "yyMMdd_"

#ブログのタイムスタンプ
$BLOGTIME = Get-Date -UFormat "%Y-%m-%dT%T%Z"

#保存先のディレクトリ名
$DIRNAME = "content/blog/" + $TODAY + $Args[0]

#テンプレートファイルを
mkdir $DIRNAME
```

これでGatsbyの記事用フォルダ`content/blog/220227_newArticle`が生成されます。PowerShellの場合引数は`$Args[0]`みたいにして配列に入るらしい。

## テンプレートの.mdファイルを編集して保存

`Copy-Item`でコピーして、`Get-Content -replace`オプションで置換しながら書き換えていきます。置換するごとにファイル出力してるけど、もうちょっとスマートな書き方あるのかな。`$fileContent > $MDFILE`で出力したらUTF16-LEで保存されてしまい、frontmatterが全てnullになって若干ハマりましたが、`Out-File`でエンコーディングを明示的に指定して事なきを得ました。

```powershell
#テンプレートを置換で書き換える
$MDFILE = $DIRNAME + "/index.md"
Copy-Item "content/template/index.md" $MDFILE

$fileContent = $(Get-Content -Encoding UTF8 $MDFILE) -replace "date:", $("date: `"" + $BLOGTIME + "`"")
$fileContent | Out-File $($MDFILE) -Encoding utf8

$fileContent = $(Get-Content -Encoding UTF8 $MDFILE) -replace "image:", $("image: `"" + $TODAY + $Args[0] + "/image.png`"")
$fileContent | Out-File $($MDFILE) -Encoding utf8
```

シェルスクリプトをサクッと作れるようになると色々幸せになれそうだし、こういうのでちょっとずつ慣れたい…