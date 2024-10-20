import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Modallev } from '@/components/ui/Modallev';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type TappingRateBoost = {
    id: number;
    amount: string;
    rate: string;
    time: number;
};

const TappingRateTable = () => {
    const [boosts, setBoosts] = useState<TappingRateBoost[]>([]);
    const [editingBoost, setEditingBoost] = useState<TappingRateBoost | null>(null);
    const [newBoost, setNewBoost] = useState<TappingRateBoost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    // Load boosts from localStorage on component mount
    useEffect(() => {
        const savedBoosts = localStorage.getItem('boosts');
        if (savedBoosts) {
            setBoosts(JSON.parse(savedBoosts));
        }
    }, []);

    // Save boosts to localStorage whenever boosts state changes
    useEffect(() => {
        if (boosts.length > 0) {
            localStorage.setItem('boosts', JSON.stringify(boosts));
        }
    }, [boosts]);

    const handleDelete = (id: number) => {
        const updatedBoosts = boosts.filter(boost => boost.id !== id);
        setBoosts(updatedBoosts);
        if (updatedBoosts.length === 0) {
            localStorage.removeItem('boosts'); // Optional: Clear localStorage if no boosts remain
        } else {
            localStorage.setItem('boosts', JSON.stringify(updatedBoosts));
        }
    };

    const handleEdit = (boost: TappingRateBoost) => {
        setEditingBoost(boost);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAddBoostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditMode && editingBoost) {
            // Update existing boost
            const updatedBoosts = boosts.map(boost =>
                boost.id === editingBoost.id ? editingBoost : boost
            );
            setBoosts(updatedBoosts);
        } else if (newBoost) {
            // Add new boost
            const newId = boosts.length > 0 ? boosts[boosts.length - 1].id + 1 : 1;
            const updatedBoosts = [...boosts, { ...newBoost, id: newId }];
            setBoosts(updatedBoosts);
        }
        resetModal();
    };

    const resetModal = () => {
        setNewBoost(null);
        setEditingBoost(null);
        setIsEditMode(false);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Shadcn Table */}
            <Table className="bg-gradient-gradient w-full text-center rounded-[15.2px]">
                <TableHeader>
                    <TableRow className="text-white">
                        <TableHead className="text-white">Amount to Pay</TableHead>
                        <TableHead className="text-white">Tapping Rate</TableHead>
                        <TableHead className="text-white">Time (seconds)</TableHead>
                        <TableHead className="text-white">Edit</TableHead>
                        <TableHead className="text-white">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {boosts.map((boost, index) => (
                        <TableRow key={boost.id} className="border-b-[0.97px] border-b-transparent text-white">
                            <TableCell>{boost.amount}</TableCell>
                            <TableCell>{boost.rate}</TableCell>
                            <TableCell>{boost.time}</TableCell>
                            <TableCell>
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleEdit(boost)}
                                >
                                    Edit
                                </button>
                            </TableCell>
                            <TableCell>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(boost.id)}
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Add Button */}
            <div className="mt-4 text-center">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center mx-auto"
                    onClick={() => {
                        setNewBoost({ id: 0, amount: '', rate: '', time: 0 });
                        setIsEditMode(false);
                        setIsModalOpen(true);
                    }}
                >
                    <FaPlus className="mr-2" /> Add New Tapping Rate Boost
                </button>
            </div>

            {/* Modal for Adding/Editing Boost */}
            {isModalOpen && (
                <Modallev onClose={resetModal}>
                    <form onSubmit={handleAddBoostSubmit}>
                        <h3 className="font-bold mb-4">{isEditMode ? 'Edit Boost' : 'Add New Boost'}</h3>
                        <div className="mb-4">
                            <label>Amount to Pay:</label>
                            <input
                                type="text"
                                value={isEditMode ? editingBoost?.amount : newBoost?.amount || ''}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (isEditMode && editingBoost) {
                                        setEditingBoost({ ...editingBoost, amount: value });
                                    } else {
                                        setNewBoost({ ...newBoost!, amount: value });
                                    }
                                }}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Tapping Rate:</label>
                            <input
                                type="text"
                                value={isEditMode ? editingBoost?.rate : newBoost?.rate || ''}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (isEditMode && editingBoost) {
                                        setEditingBoost({ ...editingBoost, rate: value });
                                    } else {
                                        setNewBoost({ ...newBoost!, rate: value });
                                    }
                                }}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Time (seconds):</label>
                            <input
                                type="number"
                                value={isEditMode ? editingBoost?.time : newBoost?.time || 0}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (isEditMode && editingBoost) {
                                        setEditingBoost({ ...editingBoost, time: value });
                                    } else {
                                        setNewBoost({ ...newBoost!, time: value });
                                    }
                                }}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                {isEditMode ? 'Save Changes' : 'Add Boost'}
                            </button>
                        </div>
                    </form>
                </Modallev>
            )}
        </div>
    );
};

export default TappingRateTable;
