#!/bin/sh

if [[ -z ${DEPLOY_ENV} ]]; then echo "DEPLOY_ENV empty"; exit 1; fi
if [[ -z ${AWS_BUCKET} ]]; then echo "AWS_BUCKET empty"; exit 1; fi

VERSION=`grep '"version"' ./package.json | awk -F '"' {'print$4'}`
TIME=`date "+%Y/%m/%d"`
LOCAL_DIST_DIR="./build"
S3_DIR="${AWS_BUCKET}/enroll-h5"
CONFIG_LOCAL_DIR="${LOCAL_DIST_DIR}/configs/school_config.json"
CONFIG_S3_DIR="${S3_DIR}/configs/school_config.json"

cat << EOF


malu-world:
    环境:	${DEPLOY_ENV}
    版本:	${VERSION}
    当前时间:	${TIME}
    本地目录:	${LOCAL_DIST_DIR}
    S3远程目录:	${S3_DIR}

    CONFIG_LOCAL_DIR: ${CONFIG_LOCAL_DIR}
    CONFIG_S3_DIR: ${CONFIG_S3_DIR}

EOF

NO_CACHE_OPTION='--cache-control max-age=0,no-cache,no-store,must-revalidate'
REPLACE_OPTION='--metadata-directive REPLACE'

aws s3 cp ${CONFIG_LOCAL_DIR} s3://${CONFIG_S3_DIR} --recursive --cache-control max-age=31536000,public
aws s3 sync ${CONFIG_LOCAL_DIR} s3://${CONFIG_S3_DIR} --delete --cache-control max-age=31536000,public
