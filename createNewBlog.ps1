#今日の日付
$TODAY = Get-Date -Format "yyMMdd_"

#ブログのタイムスタンプ
$BLOGTIME = Get-Date -UFormat "%Y-%m-%dT%T%Z"

#保存先のディレクトリ名
$DIRNAME = "content/blog/" + $TODAY + $Args[0]

#テンプレートファイルを
mkdir $DIRNAME

#テンプレートを置換で書き換える
$MDFILE = $DIRNAME + "/index.md"
Copy-Item "content/template/index.md" $MDFILE

$fileContent = $(Get-Content -Encoding UTF8 $MDFILE) -replace "date:", $("date: `"" + $BLOGTIME + "`"")
$fileContent | Out-File $($MDFILE) -Encoding utf8

$fileContent = $(Get-Content -Encoding UTF8 $MDFILE) -replace "image:", $("image: `"" + $TODAY + $Args[0] + "/image.png`"")
$fileContent | Out-File $($MDFILE) -Encoding utf8