package com.raunaq.awsimageupload.bucket;

public enum BucketName {

    Profile_Image("raunaq-image-upload");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
