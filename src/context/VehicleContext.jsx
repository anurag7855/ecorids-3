import React, { createContext, useContext, useState } from 'react';

const VehicleContext = createContext();

export const initialVehicles = [
  {
    id: '6584',
    health: 90,
    kilometers: 25468,
    condition: 'Good',
    status: 'Active'
  },
  {
    id: '7842',
    health: 85,
    kilometers: 18965,
    condition: 'Excellent',
    status: 'Active'
  },
  {
    id: '9321',
    health: 75,
    kilometers: 32147,
    condition: 'Fair',
    status: 'Service'
  }
];

export const initialSlots = [
  { name: 'A Slot', capacity: 3, bookedVehicles: ['6584'] },
  { name: 'B Slot', capacity: 3, bookedVehicles: ['7842'] },
  { name: 'C Slot', capacity: 3, bookedVehicles: [] },
  { name: 'D Slot', capacity: 3, bookedVehicles: ['9321'] },
  { name: 'E Slot', capacity: 3, bookedVehicles: [] },
  { name: 'F Slot', capacity: 3, bookedVehicles: [] },
  { name: 'G Slot', capacity: 3, bookedVehicles: [] },
  { name: 'H Slot', capacity: 3, bookedVehicles: [] },
  { name: 'I Slot', capacity: 3, bookedVehicles: [] },
  { name: 'J Slot', capacity: 3, bookedVehicles: [] },
  { name: 'K Slot', capacity: 3, bookedVehicles: [] },
  { name: 'L Slot', capacity: 3, bookedVehicles: [] },
  { name: 'M Slot', capacity: 3, bookedVehicles: [] }
];

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [slots, setSlots] = useState(initialSlots);
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);

  const addVehicle = (vehicleData) => {
    const newVehicle = {
      id: vehicleData.id,
      health: parseInt(vehicleData.health),
      kilometers: parseInt(vehicleData.kilometers),
      condition: vehicleData.condition,
      status: 'Active'
    };
    setVehicles([...vehicles, newVehicle]);
  };

  const removeVehicle = (vehicleId) => {
    // Remove vehicle from slots first
    const updatedSlots = slots.map(slot => ({
      ...slot,
      bookedVehicles: slot.bookedVehicles.filter(id => id !== vehicleId)
    }));
    setSlots(updatedSlots);

    // Then remove from vehicles
    setVehicles(vehicles.filter(v => v.id !== vehicleId));
  };

  const updateVehicleStatus = (vehicleId, newStatus) => {
    setVehicles(vehicles.map(vehicle => 
      vehicle.id === vehicleId 
        ? { ...vehicle, status: newStatus }
        : vehicle
    ));
  };

  const assignSlot = (vehicleId, slotName) => {
    setSlots(slots.map(slot => {
      if (slot.name === slotName && slot.bookedVehicles.length < slot.capacity) {
        return {
          ...slot,
          bookedVehicles: [...slot.bookedVehicles, vehicleId]
        };
      }
      return slot;
    }));
  };

  const removeFromSlot = (vehicleId, slotName) => {
    setSlots(slots.map(slot => {
      if (slot.name === slotName) {
        return {
          ...slot,
          bookedVehicles: slot.bookedVehicles.filter(id => id !== vehicleId)
        };
      }
      return slot;
    }));
  };

  const navigateVehicle = (direction) => {
    if (direction === 'next') {
      setCurrentVehicleIndex((prev) => 
        prev === vehicles.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentVehicleIndex((prev) => 
        prev === 0 ? vehicles.length - 1 : prev - 1
      );
    }
  };

  const getCurrentVehicle = () => {
    return vehicles[currentVehicleIndex] || null;
  };

  const getSlotAvailability = (slotName) => {
    const slot = slots.find(s => s.name === slotName);
    return slot ? slot.capacity - slot.bookedVehicles.length : 0;
  };

  const value = {
    vehicles,
    slots,
    currentVehicleIndex,
    addVehicle,
    removeVehicle,
    updateVehicleStatus,
    assignSlot,
    removeFromSlot,
    navigateVehicle,
    getCurrentVehicle,
    getSlotAvailability
  };

  return (
    <VehicleContext.Provider value={value}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
};
