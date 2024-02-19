package LabAppointmentSystem.LabAppointmentSystem.DAO;

import LabAppointmentSystem.LabAppointmentSystem.entity.Users;
import LabAppointmentSystem.LabAppointmentSystem.repositories.UserRepo;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class UsersDAO {
    private final UserRepo repo;

    public UsersDAO(UserRepo repo) {
        this.repo = repo;
    }

    public Users createUsers(Users admin){
        return repo.save(admin);
    }

    public List<Users> getAllUsers(){
        return repo.findAll();
    }

    public  List<Users> getAllUsersByEmail(String email){ return repo.findByEmail(email); }
}
