package LabAppointmentSystem.LabAppointmentSystem.repositories;

import LabAppointmentSystem.LabAppointmentSystem.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppointmentRepo extends JpaRepository<Appointment,Integer> {
    Optional<Appointment> findBydate(String date);
    Optional<Appointment> findBycategory(String category);
}
