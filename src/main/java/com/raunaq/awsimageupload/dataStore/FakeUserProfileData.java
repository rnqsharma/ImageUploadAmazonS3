package com.raunaq.awsimageupload.dataStore;


import com.raunaq.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileData {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("05d21f6f-42a7-462e-a6bf-c137fd945318"), "RaunaqSharma", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("c2431b21-d37a-4a36-a882-7706bf13d64d"), "KajalSharma", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
