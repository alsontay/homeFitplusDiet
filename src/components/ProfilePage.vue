<template>
  <div class="container">
    <div class="row my-2">
        <div class="col-lg-8 order-lg-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
                </li>
                <li class="nav-item">
                    <a href="" data-target="#update" data-toggle="tab" class="nav-link">Update Profile</a>
                </li>
                <li class="nav-item">
                    <a href="" data-target="#account" data-toggle="tab" class="nav-link">Account Settings</a>
                </li>
            </ul>
            <div class="tab-content py-4">
                <div class="tab-pane active" id="profile">
                    <h5 class="mb-3">Personal Information</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <h6>About</h6>
                            <p>
                                HomeFit+Diet User!
                            </p>
                            <h6>Hobbies</h6>
                            <p>
                                Indie music, skiing and hiking. I love the great outdoors.
                            </p>
                            <h6>Full Name</h6>
                            <p>
                                Jane
                                </p>
                        </div>
                    </div>
                    <!--/row-->
                </div>
                <div class="tab-pane" id="update">
                    <form role="form">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Full Name</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" value="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="email" value="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Sex</label>
                            <div class="col-lg-9">
                                <select id="form-control" class="form-control" size="0">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="NIL">Prefer Not to Answer</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Date of Birth</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="date" min="1940-01-01">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Weight(kg)</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="number" min="0" max="200">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Height(cm)</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="number" min="80" max="250">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Goals</label>
                            <div class="col-lg-9">
                                <select id="form-control" class="form-control" size="0">
                                    <option value="1">Placeholder</option>
                                    <option value="2">Placeholder</option>
                                    <option value="3">Placeholder</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Diet Type</label>
                            <div class="col-lg-9">
                                <select id="form-control" class="form-control" size="0">
                                    <option value="1">No Preference</option>
                                    <option value="2">Vegetarian</option>
                                    <option value="3">Vegan</option>
                                    <option value="1">Ketogenic</option>
                                    <option value="2">Pescretarian</option>
                                    <option value="3">Paleo</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Allergies</label>
                            <div class="col-lg-9">
                                <div class = "checkboxes">
                                    <input type="checkbox" id="none" name="none" value="None">
                                    <label for="shellfish"> None</label>
                                    <input type="checkbox" id="diary" name="diary" value="Diary">
                                    <label for="diary"> Dairy </label>
                                    <input type="checkbox" id="nuts" name="nuts" value="Nuts">
                                    <label for="nuts"> Nuts</label>
                                    <input type="checkbox" id="soy" name="soy" value="Soy">
                                    <label for="soy"> Soy</label><br>
                                    <input type="checkbox" id="egg" name="egg" value="Egg">
                                    <label for="egg"> Egg </label>
                                    <input type="checkbox" id="seafood" name="seafood" value="Seafood">
                                    <label for="seafood"> Seafood</label>
                                    <input type="checkbox" id="shellfish" name="shellfish" value="Shellfish">
                                    <label for="seafood"> Shellfish</label>
                                    <input type="checkbox" id="gluten" name="gluten" value="Gluten">
                                    <label for="gluten"> Gluten</label> 

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="tab-pane" id="account">
                </div>
            </div>
        </div>
        <div class="col-lg-4 order-lg-1 text-center">
            <img src="//placehold.it/150" class="mx-auto img-fluid img-circle d-block" alt="avatar">
            <h6 class="mt-2">Upload a different photo</h6>
            <label class="custom-file">
                <input type="file" id="file" class="custom-file-input">
                <span class="custom-file-control">Choose file</span>
            </label>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
    .checkboxes {
      text-align:left;
     }
    .checkboxes input{
      margin: 0px 0px 0px 0px;
     }

     .checkboxes label{
       margin: 0px 20px 0px 3px;
     }
</style>
