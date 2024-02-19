package LabAppointmentSystem.LabAppointmentSystem.DTO;

public class AppointmentDTO {
    private int id;
    private String fName;
    private String lName;
    private String address;
    private String age;
    private String dob;
    private String gender;
    private String category;
    private String country;
    private String date;
    private String time;
    private String email;
    private String phone;
    public AppointmentDTO() {
    }

    public AppointmentDTO(int id, String fName, String lName, String address, String age, String dob, String gender,
                          String category, String country, String date, String time, String email, String phone) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.category = category;
        this.country = country;
        this.date = date;
        this.time = time;
        this.email = email;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
