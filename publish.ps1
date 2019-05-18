
# note 1: I am using bash to zip the file since Compress-Archive produces archives that can't be used by a lambda function.
#         see https://stackoverflow.com/a/47880453/409259
#
# note 2: assumes the lambda function name is the same as the project folder name

rm app.zip -ErrorAction Ignore
cd app
npm i
write-output 'compressing lambda function code...'
bash -c 'zip -r ../app.zip * -qdc'
# cd ..
# write-output 'uploading lambda function code...'
# aws lambda update-function-code --function-name $(Get-Location | Split-Path -Leaf) --zip-file fileb://app.zip
write-output 'done!'
